// [Terry] Also need to look at getPageType() in ./lib/helpers
// to set a menu to a page
import SupabaseJsV1Nav from 'data/nav/supabase-js/v1'
import SupabaseJsV2Nav from 'data/nav/supabase-js/v2'
import SupabaseDartV0Nav from 'data/nav/supabase-dart/v0'
import SupabaseDartV1Nav from 'data/nav/supabase-dart/v1'
import SupabaseCLINav from 'data/nav/supabase-cli'
import SupabaseAPINav from 'data/nav/supabase-api'
import AuthServerNav from 'data/nav/auth-server'
import RealtimeServerNav from 'data/nav/realtime-server'
import StorageServerNav from 'data/nav/storage-server'

import { NavMenu, References } from './Navigation.types'

export const REFERENCES: References = {
  javascript: {
    name: 'supabase-js',
    library: 'supabase-js',
    versions: ['v2', 'v1'],
    icon: '/docs/img/libraries/javascript-icon.svg',
  },
  dart: {
    name: 'Flutter',
    library: 'supabase-dart',
    versions: ['v1', 'v0'],
    icon: '/docs/img/libraries/flutter-icon.svg',
  },
  cli: {
    name: 'CLI',
    library: undefined,
    versions: [],
    icon: '/docs/img/icons/cli-icon.svg',
  },
  api: {
    name: 'API',
    library: undefined,
    versions: [],
    icon: '/docs/img/icons/api-icon.svg',
  },
}

export const menuItems: NavMenu = {
  docs: [
    {
      label: '概述',
      items: [
        { name: '简介', url: '/', items: [] },
        { name: '特性', url: '/features', items: [] },
        { name: '架构', url: '/architecture', items: [] },
      ],
    },
    {
      label: '快速入门',
      items: [
        { name: 'Angular', url: '/guides/with-angular', items: [] },
        { name: 'Expo', url: '/guides/with-expo', items: [] },
        { name: 'Flutter', url: '/guides/with-flutter', items: [] },
        { name: 'Ionic Angular', url: '/guides/with-ionic-angular', items: [] },
        { name: 'Ionic React', url: '/guides/with-ionic-react', items: [] },
        { name: 'Ionic Vue', url: '/guides/with-ionic-vue', items: [] },
        { name: 'Next.js', url: '/guides/with-nextjs', items: [] },
        { name: 'Nuxt 3', url: '/guides/with-nuxt-3', items: [] },
        { name: 'React', url: '/guides/with-react', items: [] },
        { name: 'RedwoodJS', url: '/guides/with-redwoodjs', items: [] },
        { name: 'SolidJS', url: '/guides/with-solidjs', items: [] },
        { name: 'Svelte', url: '/guides/with-svelte', items: [] },
        { name: 'SvelteKit', url: '/guides/with-sveltekit', items: [] },
        { name: 'Vue 3', url: '/guides/with-vue-3', items: [] },
      ],
    },
    {
      label: 'CLI',
      items: [
        { name: '概述', url: '/guides/cli', items: [] },
        { name: '本地开发', url: '/guides/cli/local-development', items: [] },
        { name: '环境管理', url: '/guides/cli/managing-environments', items: [] },
      ],
    },
    {
      label: '认证',
      items: [
        { name: '概述', url: '/guides/auth', items: [] },
        {
          name: '身份验证',
          url: undefined,
          items: [
            { name: '使用电子邮件登录', url: '/guides/auth/auth-email', items: [] },
            { name: '使用Magic Link登录', url: '/guides/auth/auth-magic-link', items: [] },
            { name: '使用Apple登录', url: '/guides/auth/auth-apple', items: [] },
            { name: '使用Azure登录', url: '/guides/auth/auth-azure', items: [] },
            { name: '使用Bitbucket登录', url: '/guides/auth/auth-bitbucket', items: [] },
            { name: '使用 Discord 登录', url: '/guides/auth/auth-discord', items: [] },
            { name: '使用Facebook登录', url: '/guides/auth/auth-facebook', items: [] },
            { name: '使用Github登录', url: '/guides/auth/auth-github', items: [] },
            { name: '使用Gitlab登录', url: '/guides/auth/auth-gitlab', items: [] },
            { name: '使用Google登录', url: '/guides/auth/auth-google', items: [] },
            { name: '使用Keycloak登录', url: '/guides/auth/auth-keycloak', items: [] },
            { name: '使用LinkedIn登录', url: '/guides/auth/auth-linkedin', items: [] },
            { name: '使用Notion登录', url: '/guides/auth/auth-notion', items: [] },
            { name: '使用Slack登录', url: '/guides/auth/auth-slack', items: [] },
            { name: '使用Spotify登录', url: '/guides/auth/auth-spotify', items: [] },
            { name: '使用Twitch登录', url: '/guides/auth/auth-twitch', items: [] },
            { name: '使用Twitter登录', url: '/guides/auth/auth-twitter', items: [] },
            { name: '使用WorkOS登录', url: '/guides/auth/auth-workos', items: [] },
            { name: '使用Twilio的电话认证', url: '/guides/auth/auth-twilio', items: [] },
            { name: '使用Vonage的电话认证', url: '/guides/auth/auth-vonage', items: [] },
            {
              name: '使用MessageBird的电话认证',
              url: '/guides/auth/auth-messagebird',
              items: [],
            },
          ],
        },
        {
          name: '授权',
          url: undefined,
          items: [
            { name: '行级安全性', url: '/guides/auth/row-level-security', items: [] },
            { name: '管理用户信息', url: '/guides/auth/managing-user-data', items: [] },
            { name: '启用验证码保护', url: '/guides/auth/auth-captcha', items: [] },
            { name: '服务器端渲染', url: '/guides/auth/server-side-rendering', items: [] },
            { name: '多因素认证', url: '/guides/auth/auth-mfa', items: [] },
          ],
        },
        {
          name: '认证帮助程序',
          url: undefined,
          items: [
            { name: '概述', url: '/guides/auth/auth-helpers', items: [] },
            { name: '认证用户界面', url: '/guides/auth/auth-helpers/auth-ui', items: [] },
            { name: 'Next.js', url: '/guides/auth/auth-helpers/nextjs', items: [] },
            { name: 'SvelteKit', url: '/guides/auth/auth-helpers/sveltekit', items: [] },
            { name: 'Remix', url: '/guides/auth/auth-helpers/remix', items: [] },
          ],
        },
        {
          name: '深层探索',
          url: undefined,
          items: [
            {
              name: '第一部分：JWTs',
              url: '/learn/auth-deep-dive/auth-deep-dive-jwts',
              items: [],
            },
            {
              name: '第二部分：行级安全',
              url: '/learn/auth-deep-dive/auth-row-level-security',
              items: [],
            },
            { name: '第三部分：政策', url: '/learn/auth-deep-dive/auth-policies', items: [] },
            { name: '第四部分：GoTrue', url: '/learn/auth-deep-dive/auth-gotrue', items: [] },
            {
              name: '第五部分：谷歌OAuth',
              url: '/learn/auth-deep-dive/auth-google-oauth',
              items: [],
            },
          ],
        },
      ],
    },
    {
      label: '数据库',
      items: [
        { name: '概述', url: '/guides/database', items: [] },
        { name: '数据库连接', url: '/guides/database/connecting-to-postgres', items: [] },
        { name: '表格和数据', url: '/guides/database/tables', items: [] },
        { name: '数据库功能', url: '/guides/database/functions', items: [] },
        { name: '数据库Webhooks', url: '/guides/database/webhooks', items: [] },
        { name: '全文检索', url: '/guides/database/full-text-search', items: [] },
        { name: '数据库测试', url: '/guides/database/testing', items: [] },
        {
          name: '无服务器API',
          url: undefined,
          items: [
            { name: '概述', url: '/guides/api', items: [] },
            { name: '生成类型', url: '/guides/api/generating-types', items: [] },
          ],
        },
        {
          name: '扩展',
          url: undefined,
          items: [
            { name: '概述', url: '/guides/database/extensions', items: [] },
            { name: 'http：RESTful客户端', url: '/guides/database/extensions/http', items: [] },
            {
              name: 'pg_cron: 工作调度',
              url: '/guides/database/extensions/pgcron',
              items: [],
            },
            {
              name: 'pg_net: 异步联网',
              url: '/guides/database/extensions/pgnet',
              items: [],
            },
            { name: 'pgTAP: 单元测试', url: '/guides/database/extensions/pgtap', items: [] },
            {
              name: 'plv8: Javascript语言',
              url: '/guides/database/extensions/plv8',
              items: [],
            },
            {
              name: 'uuid-ossp: 唯一标识符',
              url: '/guides/database/extensions/uuid-ossp',
              items: [],
            },
          ],
        },
        {
          name: '配置',
          url: undefined,
          items: [
            { name: '超时', url: '/guides/database/timeouts', items: [] },
            { name: '复制', url: '/guides/database/replication', items: [] },
            { name: '密码', url: '/guides/database/managing-passwords', items: [] },
            { name: '时区', url: '/guides/database/managing-timezones', items: [] },
          ],
        },
      ],
    },
    {
      label: '边缘函数',
      items: [
        { name: '概述', url: '/guides/functions', items: [] },
        { name: '认证', url: '/guides/functions/auth', items: [] },
        { name: '实例', url: '/guides/functions/examples', items: [] },
        { name: 'CI/CD工作流程', url: '/guides/functions/cicd-workflow', items: [] },
      ],
    },
    {
      label: 'Realtime',
      items: [
        { name: '概述', url: '/guides/realtime', items: [] },
        { name: '快速入门', url: '/guides/realtime/quickstart', items: [] },
        { name: 'Postgres CDC', url: '/guides/realtime/postgres-cdc', items: [] },
        { name: 'Rate Limits', url: '/guides/realtime/rate-limits', items: [] },
      ],
    },
    {
      label: '存储',
      items: [
        { name: '概述', url: '/guides/storage', items: [] },
        { name: 'CDN', url: '/guides/storage-cdn', items: [] },
      ],
    },
    {
      label: 'Platform',
      items: [
        { name: '概述', url: '/guides/hosting/platform', items: [] },
        { name: '计算插件', url: '/guides/platform/compute-add-ons', items: [] },
        { name: '自定义域名', url: '/guides/platform/custom-domains', items: [] },
        { name: '数据库的使用', url: '/guides/platform/database-usage', items: [] },
        { name: 'Logging', url: '/guides/platform/logs', items: [] },
        { name: 'Metrics', url: '/guides/platform/metrics', items: [] },
        {
          name: '迁移和升级',
          url: '/guides/platform/migrating-and-upgrading-projects',
          items: [],
        },
        { name: '性能调控', url: '/guides/platform/performance', items: [] },
        { name: '许可权', url: '/guides/platform/permissions', items: [] },
        { name: '生产准备', url: '/guides/platform/going-into-prod', items: [] },
      ],
    },
    {
      label: '自主托管',
      items: [
        { name: '概述', url: '/guides/hosting/overview', items: [] },
        { name: 'Docker', url: '/guides/hosting/docker', items: [] },
      ],
    },
    {
      label: '迁移到Supabase',
      items: [
        { name: 'Firebase 认证', url: '/guides/migrations/firebase-auth', items: [] },
        { name: 'Firestore 数据', url: '/guides/migrations/firestore-data', items: [] },
        { name: 'Firebase 存储', url: '/guides/migrations/firebase-storage', items: [] },
        { name: 'Heroku', url: '/guides/migrations/heroku', items: [] },
      ],
    },
    {
      label: '整合',
      items: [
        { name: 'Supabase 市场', url: '/guides/integrations/integrations', items: [] },
        {
          name: '认证',
          url: undefined,
          items: [
            { name: 'Auth0', url: '/guides/integrations/auth0', items: [] },
            { name: 'Authsignal', url: '/guides/integrations/authsignal', items: [] },
            { name: 'Clerk', url: '/guides/integrations/clerk', items: [] },
            { name: 'keyri', url: '/guides/integrations/keyri', items: [] },
            { name: 'Stytch', url: '/guides/integrations/stytch', items: [] },
            { name: 'SuperTokens', url: '/guides/integrations/supertokens', items: [] },
          ],
        },
        {
          name: '缓存/离线优先',
          url: undefined,
          items: [{ name: 'Polyscale', url: '/guides/integrations/polyscale', items: [] }],
        },
        {
          name: '开发者工具',
          url: undefined,
          items: [
            { name: 'pgMustard', url: '/guides/integrations/pgmustard', items: [] },
            { name: 'Prisma', url: '/guides/integrations/prisma', items: [] },
            { name: 'Sequin', url: '/guides/integrations/sequin', items: [] },
            { name: 'Snaplet', url: '/guides/integrations/snaplet', items: [] },
            { name: 'Vercel', url: '/guides/integrations/vercel', items: [] },
          ],
        },
        {
          name: '低代码',
          url: undefined,
          items: [
            { name: 'Appsmith', url: '/guides/integrations/appsmith', items: [] },
            { name: 'Dashibase', url: '/guides/integrations/dashibase', items: [] },
            { name: 'DhiWise', url: '/guides/integrations/dhiwise', items: [] },
            { name: 'Directus', url: '/guides/integrations/directus', items: [] },
            { name: 'Draftbit', url: '/guides/integrations/draftbit', items: [] },
            { name: 'Plasmic', url: '/guides/integrations/plasmic', items: [] },
            { name: 'WeWeb', url: '/guides/integrations/weweb', items: [] },
          ],
        },
      ],
    },
  ],
  reference: [
    {
      label: '官方',
      items: [
        { name: '参考文件', url: '/reference', items: [] },
        { name: 'Supabase JavaScript库', url: '/reference/javascript', items: [] },
        { name: 'Supabase Flutter库', url: '/reference/dart', items: [] },
        { name: 'Supabase CLI', url: '/reference/cli', items: [] },
        { name: 'Management API', url: '/reference/api', items: [] },
      ],
    },
    {
      label: '自主托管',
      items: [
        { name: 'Auth Server', url: '/reference/auth', items: [] },
        { name: 'Realtime Server', url: '/reference/realtime', items: [] },
        { name: 'Storage Server', url: '/reference/storage', items: [] },
      ],
    },
  ],
  'reference/javascript': SupabaseJsV2Nav,
  'reference/javascript/v1': SupabaseJsV1Nav,
  'reference/dart': SupabaseDartV1Nav,
  'reference/dart/v0': SupabaseDartV0Nav,
  'reference/cli': SupabaseCLINav,
  'reference/api': SupabaseAPINav,
  'reference/auth': AuthServerNav,
  'reference/realtime': RealtimeServerNav,
  'reference/storage': StorageServerNav,
}
