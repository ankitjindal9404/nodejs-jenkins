pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

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

        stage('Deploy') {
            steps {
                sh '''
                    npm install -g vercel
                    vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicdproject
                    '''
            }
        }
    }
}