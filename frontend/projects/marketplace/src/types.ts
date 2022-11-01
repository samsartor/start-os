import { Url } from '@start9labs/shared'

export type MarketplaceURL = string

export type MarketplaceName = string

export type Marketplace = Record<MarketplaceURL, StoreData | null>

export interface StoreData {
  info: StoreInfo
  packages: MarketplacePkg[]
}

export interface StoreInfo {
  name: MarketplaceName
  categories: string[]
}

export interface MarketplacePkg {
  icon: Url
  license: Url
  instructions: Url
  manifest: MarketplaceManifest
  categories: string[]
  versions: string[]
  'dependency-metadata': {
    [id: string]: {
      title: string
      icon: Url
    }
  }
  'published-at': string
}

export interface MarketplaceManifest<T = unknown> {
  id: string
  title: string
  version: string
  description: {
    short: string
    long: string
  }
  'release-notes': string
  license: string // type of license
  'wrapper-repo': Url
  'upstream-repo': Url
  'support-site': Url
  'marketing-site': Url
  'donation-url': Url | null
  alerts: {
    install: string | null
    uninstall: string | null
    restore: string | null
    start: string | null
    stop: string | null
  }
  dependencies: Record<string, Dependency<T>>
}

export interface Dependency<T> {
  version: string
  requirement:
    | {
        type: 'opt-in'
        how: string
      }
    | {
        type: 'opt-out'
        how: string
      }
    | {
        type: 'required'
      }
  description: string | null
  config: T
}