pipeline {
    agent {
        docker {
            image 'node:18'
            args '-v /usr/local/bin/docker:/usr/local/bin/docker'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/bilelBZ/Water-vendor'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t frontend:v1 .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([ credentialsId: 'dockerhub-credentials', url: 'https://index.docker.io/v1/' ]) {
                    sh 'docker push votre-image'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 80:80 frontend:v1'
            }
        }
    }
}