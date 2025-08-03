pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh '''
                    npm ci
                    '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    npm test
                    ''' 
            }
        }
    }
}