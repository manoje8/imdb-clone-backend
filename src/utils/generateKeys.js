import crypto from "crypto"

const generateKeys = () => {
    const key1 = crypto.randomBytes(32).toString('hex')
    const key2 = crypto.randomBytes(32).toString('hex')

    console.table({key1, key2})
}

// Use it to generate random key
// generateKeys()

const randomString = () => {
    return crypto.randomBytes(32).toString('hex')
}

export {randomString}