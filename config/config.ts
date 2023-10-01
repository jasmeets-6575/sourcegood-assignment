export interface Root {
    configuration: Configuration
  }
  
  export interface Configuration {
    guid: string
    applicationStackName: string
    ownDomainName: string
    coreContainerName: string
    useElasticBeanStalkBackend: boolean
    ownDomainNameProduction: string
    enableAppMesh: boolean
    useOwnDomain: boolean
    stackType: string
    mode: string
    developmentVpcRegion: string
    developmentVpcAccount: string
    awsServicesOverNat: boolean
    enableBastion: boolean
    coreHealthCheckUrl: string
    frontendHealthCheckUrl: string
    frontendEbsEnabled: boolean
    alternateWwwRecord: string
    alternateFrontEndIp: string
    enableProduction: boolean
    adminBucketName: string
    instanceTypes: string
    applicationName: string
    backendVpcNameStaging: string
    backendVpcCidrStaging: string
    backEndVpcCidrProduction: string
    developmentVpcId: string
    webserverPort: string
    rootZoneId: string
    rootZoneIdProduction: string
    peerVpcCidr: string
    frontendVpcCidrStaging: string
    frontendVpcCidrProduction: string
    loadbalancerInboundCIDR: string
    loadbalancerOutboundCIDR: string
    webserverOutboundCIDR: string
    zipFileName: string
    zipFileNameFrontend: string
    solutionStackName: string
    managedActionsEnabled: string
    keyPairName: string
    updateLevel: string
    minInstancesInService: string
    maxInstancesInService: string
    stepInstancSizeMax: string
    preferredUpdateStartTime: string
    streamLogs: string
    deleteLogsOnTerminate: string
    logRetentionDays: string
    loadBalancerType: string
    lbHTTPSEnabled: boolean
    staticBucketName: string
    settingsFileName: string
    adminStarterPath: string
    lbHTTPSCertificateArn: string
    lbHTTPSCertificateArnProduction: string
    lbCdnEnabled: boolean
    cdnCertificateArnProduction: string
    cdnCertificateArn: string
    lbSSLPolicy: string
    envoyStatsTags: string
    envoyXrayTracing: string
    envoyLogLevel: string
    adminStartPage: string
    databaseSettings: DatabaseSettings
    coreRepo: CoreRepo
    storeFrontRepo: StoreFrontRepo
    adminRepo: AdminRepo
    stagingEnv: StagingEnv
    productionEnv: ProductionEnv
    description: string
    stackEnvironmentSettings: string
    nodejsVersion: string
    awsServices: string[]
    redisSettings: RedisSettings
    pipelineSettings: PipelineSettings
    containers: Container[]
  }
  
  export interface DatabaseSettings {
    dbName: string
    dbAdminUsername: string
    dbWebUsername: string
    dbStorageGB: number
    dbMaxStorageGiB: number
    dbMultiAZ: boolean
    dbBackupRetentionDays: number
    dbDeleteAutomatedBackups: boolean
    dbPreferredBackupWindow: string
    dbCloudwatchLogsExports: string[]
    dbIamAuthentication: boolean
    dbInstanceType: string
    dbRetentionPolicy: string
    dbPort: number
  }
  
  export interface CoreRepo {
    repo: Repo
  }
  
  export interface Repo {
    repoName: string
    repoDeploymentBranch: string
    repoDevelopmentBranch: string
    repoStagingBranch: string
    repoOwner: string
    gitHubConnectionArn: string
  }
  
  export interface StoreFrontRepo {
    repo: Repo2
  }
  
  export interface Repo2 {
    repoName: string
    repoDeploymentBranch: string
    repoDevelopmentBranch: string
    repoStagingBranch: string
    repoOwner: string
    gitHubConnectionArn: string
  }
  
  export interface AdminRepo {
    repo: Repo3
  }
  
  export interface Repo3 {
    repoName: string
    repoDeploymentBranch: string
    repoDevelopmentBranch: string
    repoStagingBranch: string
    repoOwner: string
    gitHubConnectionArn: string
  }
  
  export interface StagingEnv {
    account: string
    region: string
  }
  
  export interface ProductionEnv {
    account: string
    region: string
  }
  
  export interface RedisSettings {
    externalRedisHost: string
    externalRedisPort: string
    redisPort: string
  }
  
  export interface PipelineSettings {
    schedule: Schedule
    notification: Notification
    approval: Approval
  }
  
  export interface Schedule {
    hour: string
    minute: string
    weekday: string
  }
  
  export interface Notification {
    slack: Slack[]
  }
  
  export interface Slack {
    channelConfigurationName: string
    channelId: string
    workspaceId: string
    arn: string
  }
  
  export interface Approval {
    notifyEmails: string[]
    notifyTopic: string
  }
  
  export interface Container {
    healthCheckPath: string
    isExternalFacing: boolean
    isEnabled: boolean
    containerApplicationName: string
    registryName?: string
    containerEnvironmentParameters: ContainerEnvironmentParameters
    containerApi: ContainerApi
    dockerFileName?: string
    repo?: Repo4
  }
  
  export interface ContainerEnvironmentParameters {
    MEILI_MASTER_KEY?: string
    NODE_ENV?: string
    AWS_ENABLED?: string
    AWS_RDS_HOSTNAME?: string
    AWS_RDS_USERNAME?: string
    AWS_RDS_PASSWORD?: string
    AWS_RDS_DATABASE?: string
    AWS_RDS_PORT?: string
    AWS_JWT_SECRET?: string
    AWS_COOKIE_SECRET?: string
    AWS_REDIS_URL?: string
    STORE_CORS?: string
    ADMIN_CORS?: string
    STRAPI_SERVER?: string
    MELISEARCH_HOST?: string
    MELISEARCH_MASTER_KEY?: string
    AUTH_SERVER?: string
    STRAPI_PORT?: number
    STRAPI_PROTOCOL?: string
    AWS_SETTINGS_BUCKET?: string
    TYPEORM_CONNECTION?: string
    TYPEORM_HOST?: string
    TYPEORM_USERNAME?: string
    TYPEORM_PASSWORD?: string
    SAAS_REDIRECT_URL?: string
    SAASFORM_BASE_URL?: string
    TYPEORM_DATABASE?: string
    TYPEORM_PORT?: string
    TYPEORM_SYNCHRONIZE?: string
    TYPEORM_LOGGING?: string
    TYPEORM_MIGRATIONS?: string
    HUMBUG_TOKEN?: string
    STRIPE_PUBLISHABLE_KEY?: string
    STRIPE_API_KEY?: string
    RDS_DATABASE_TYPE?: string
    RDS_HOSTNAME?: string
    RDS_USERNAME?: string
    RDS_PASSWORD?: string
    RDS_DATABASE?: string
    RDS_PORT?: string
    RDS_SYNCHRONIZE?: string
    RDS_LOGGING?: string
    REDIS_HOST?: string
    REDIS_PORT?: string
    APP_KEYS?: string
    API_TOKEN_SALT?: string
    JWT_SECRET?: string
    ADMIN_JWT_SECRET?: string
  }
  
  export interface ContainerApi {
    port: string
    protocol: string
  }
  
  export interface Repo4 {
    repo: Repo5
  }
  
  export interface Repo5 {
    repoName: string
    repoDeploymentBranch: string
    repoDevelopmentBranch: string
    repoStagingBranch: string
    repoOwner: string
    gitHubConnectionArn: string
    repoFolder?: string
  }
  