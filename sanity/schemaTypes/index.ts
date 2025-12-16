import project from './project'
import pricing from './pricing'
import siteSettings from './siteSettings'
import page from './page'
import inquiry from './inquiry'
import hero from './pageBuilder/hero'
import gallery from './pageBuilder/gallery'
import pricingSection from './pageBuilder/pricingSection'
import faqSection from './pageBuilder/faqSection'

export const schemaTypes = [
  // Documents
  page,
  project,
  pricing,
  siteSettings,
  inquiry, // New schema added
  
  // Page Builder Objects
  hero,
  gallery,
  pricingSection,
  faqSection
]
