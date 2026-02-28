pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "saurav225986/drmilindbapat:latest"
    }

    tools {
        sonarQubeScanner 'SonarScanner'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Sauravambuskar/drmilindbapat.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                        sh """
                        sonar-scanner \
                          -Dsonar.projectKey=drmilindbapat \
                          -Dsonar.sources=. \
                          -Dsonar.login=$SONAR_TOKEN
                        """
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                }
            }
        }

        stage('Push Image') {
            steps {
                sh "docker push $DOCKER_IMAGE"
            }
        }

        stage('Deploy to Server') {
            steps {
                sh """
                ssh ubuntu@YOUR_SERVER_IP '
                    docker pull $DOCKER_IMAGE &&
                    docker stop drmilindbapat-web || true &&
                    docker rm drmilindbapat-web || true &&
                    docker run -d -p 80:80 --name drmilindbapat-web $DOCKER_IMAGE
                '
                """
            }
        }
    }
}
