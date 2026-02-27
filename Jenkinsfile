pipeline {
    agent any

    environment {
        DOCKER_IMAGE    = 'drmilindbapat/website'
        DOCKER_TAG      = "${env.BUILD_NUMBER}"
        DOCKER_REGISTRY = 'docker.io'
        DEPLOY_SERVER   = 'your-server-ip'
        DEPLOY_USER     = 'deploy'
        DOMAIN          = 'drmilindbapat.in'
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Branch: ${env.BRANCH_NAME}, Commit: ${env.GIT_COMMIT}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint & Type Check') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm run lint || true'
                    }
                }
                stage('Type Check') {
                    steps {
                        sh 'npx tsc --noEmit'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test -- --run || true'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Docker Build') {
            steps {
                sh """
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }

        stage('Docker Push') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying to staging...'
                sh """
                    ssh ${DEPLOY_USER}@${DEPLOY_SERVER} '
                        cd /opt/drmilindbapat-staging &&
                        docker-compose pull &&
                        docker-compose up -d --force-recreate
                    '
                """
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                echo 'Deploying to production...'
                sh """
                    ssh ${DEPLOY_USER}@${DEPLOY_SERVER} '
                        cd /opt/drmilindbapat &&
                        docker-compose -f docker-compose.prod.yml pull &&
                        docker-compose -f docker-compose.prod.yml up -d --force-recreate
                    '
                """
            }
        }
    }

    post {
        success {
            echo "✅ Build #${env.BUILD_NUMBER} succeeded"
        }
        failure {
            echo "❌ Build #${env.BUILD_NUMBER} failed"
        }
        always {
            cleanWs()
        }
    }
}
