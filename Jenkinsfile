pipeline {
    agent any

    stages {
        stage('Develop') {
            steps {
                echo 'npm start'
            }
        }
        stage('Test') {
            steps {
                echo 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'npm build'
            }
        }
    }
}
