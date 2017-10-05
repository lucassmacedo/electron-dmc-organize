/* eslint-disable */
import constants from './constants'
import fs from 'fs'
import path from 'path'

export function isSupportedImageFile (file) {
	var extension = path.extname(file)
	if(extension) {
		extension = extension.slice(1) // remove the dot
		extension = extension.toLowerCase()
		return constants.SupportedImageExtensions.indexOf(extension) !== -1
	}
	return false
}

export function getDirectoryImageFiles (dir) {
	var files = fs.readdirSync(dir)

	var fullFilePaths = files.map(function(fileName) {
		var newFilePath = path.join(dir, fileName)
		if (process.platform === 'darwin'){
			newFilePath = encodeURIComponent(newFilePath).replace(/%2F/g, '/')
		} else if (process.platform === 'win32'){
			newFilePath = encodeURIComponent(newFilePath).replace(/%3A/g, ':').replace(/%5C/g, '\\')
		}
		return newFilePath
	});

	var imageFiles = fullFilePaths.filter(isSupportedImageFile)

	return imageFiles
}

