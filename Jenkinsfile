@Library('deployment-library@main') _

deployPipeline(
    gitRepository: 'https://github.com/enrichoalkalas01/tugas-web-jelajah-travel.git',
    gitBranch: 'master',
    gitCredentialsId: 'endlesscreative-credentials',

    registryUrl: '192.168.20.21',
    registryCredentialsId: 'harbor-credentials',
    imageName: 'jelajah-id-dev',
    imageFolder: 'other',

    namespace: 'portofolio',
    helmValuesFile: 'values/values.dev.yml',
    servicePort: '31157',
)
