'use strict'

const crypto = use('crypto')
const Helpers = use('Helpers')

/**
 * @param { int } length - String size
 * @return { string } a random string created
 */

 const str_random = async (length = 40) => {
     let string = ''
     let len = string.length

     if(len < length) {
         let size = length - len
         let bytes = await crypto.randomBytes(size)
         let buffer = Buffer.from(bytes)
         string += buffer
         .toString('base64')
         .replace(/[^a-zA-Z0-0]/g, '')
         .substr(0, size)
     }

     return string
 }

 const imageUpload = async (file, path = null) => {
    path = path ? path : Helpers.publicPath('uploads')
    const random_name = await str_random(30)
    let filename = `${new Date().getTime()}-${random_name}.${file.subtype}`

    //rename and move file
    await file.move(path, {
        name: filename
    })

    return file
 }

 module.exports = {
     str_random,
     imageUpload
 }