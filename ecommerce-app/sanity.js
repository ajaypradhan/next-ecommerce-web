import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '0a7ud2u2',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
  token:
    'skNIKNcurOAIAw68eGptAVCDePfyEKJxLkXkilW8n2Iy55wd7cKMM5q0nU9D8QmX3CvUUtNhoRrEFhVq1zcxFrEtHjx1lzLZavarv5gLlNMn0OuM1dhjBSRROi1mx6deoKAgL2CQOcfn2L8nTGfNgc0QB63k2rYnusBDJmnO6vkfHdwNvzbr',
})
