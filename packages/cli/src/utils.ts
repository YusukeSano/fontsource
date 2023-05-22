// Used to determine where the downloader should save the files
const makeFontDownloadPath = (
	fontDir: string,
	fontId: string,
	subset: string,
	weight: number,
	style: string,
	extension: string
): string =>
	`${fontDir}/files/${fontId}-${subset}-${weight}-${style}.${extension}`;

// Some axes are all uppercase making packages inconsistent
const makeVariableFontDownloadPath = (
	fontDir: string,
	fontId: string,
	subset: string,
	axes: string,
	style: string
): string =>
	`${fontDir}/files/${fontId}-${subset}-${axes.toLowerCase()}-${style}.woff2`;

// Used for the src urls in CSS files
const makeFontFilePath = (
	fontId: string,
	subset: string,
	weight: number,
	style: string,
	extension: string
): string => `./files/${fontId}-${subset}-${weight}-${style}.${extension}`;

const makeVariableFontFilePath = (
	fontId: string,
	subset: string,
	axes: string,
	style: string
): string => `./files/${fontId}-${subset}-${axes}-${style}.woff2`;

// Insert a weight array to find the closest number given num - used for index.css gen
const findClosest = (arr: number[], num: number): number => {
	// Array of absolute values showing diff from target number
	const indexArr = arr.map((weight) => Math.abs(Number(weight) - num));
	// Find smallest diff
	const min = Math.min(...indexArr);
	const closest = arr[indexArr.indexOf(min)];

	return closest;
};

const licenseMap = {
	'apache license, version 2.0': 'Apache-2.0',
	'sil open font license, 1.1': 'OFL-1.1',
	'ubuntu font license, 1.0': 'UFL-1.0',
	'mit license': 'MIT',
	'cc0-1.0': 'CC0-1.0',
};

export const licenseShort = (license: string): string | undefined =>
	licenseMap[license.toLowerCase() as keyof typeof licenseMap];

export const sassVar = (key: string, value: string) =>
	`$${key}: ${value} !default;\n`;

export {
	findClosest,
	makeFontDownloadPath,
	makeFontFilePath,
	makeVariableFontDownloadPath,
	makeVariableFontFilePath,
};