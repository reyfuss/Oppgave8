import sanityClient from '@sanity/client'

const options = {
    projectId: 'b0j3d6i7',
    dataset: 'production',
    apiVersion: '2021-03-25'
}

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production',
})

export default client