/* responsive-images.js — Adds srcset for responsive images
 * Three sizes: thumb (200px), mobile (800px), full (original)
 * Images in 'thumb/' and 'mobile/' subfolders, converted to .jpg
 */

function getMobileSrc(src) {
  if (!src) return '';
  var lastSlash = src.lastIndexOf('/');
  var dir = src.substring(0, lastSlash);
  var filename = src.substring(lastSlash + 1);
  var dotIdx = filename.lastIndexOf('.');
  var jpgName = dotIdx !== -1 ? filename.substring(0, dotIdx) + '.jpg' : filename;
  return dir + '/mobile/' + jpgName;
}

function getThumbSrc(src) {
  if (!src) return '';
  var lastSlash = src.lastIndexOf('/');
  var dir = src.substring(0, lastSlash);
  var filename = src.substring(lastSlash + 1);
  var dotIdx = filename.lastIndexOf('.');
  var jpgName = dotIdx !== -1 ? filename.substring(0, dotIdx) + '.jpg' : filename;
  return dir + '/thumb/' + jpgName;
}

function getDesktopSrc(src) {
  if (!src) return '';
  var lastSlash = src.lastIndexOf('/');
  var dir = src.substring(0, lastSlash);
  var filename = src.substring(lastSlash + 1);
  var dotIdx = filename.lastIndexOf('.');
  var jpgName = dotIdx !== -1 ? filename.substring(0, dotIdx) + '.jpg' : filename;
  return dir + '/desktop/' + jpgName;
}

function addSrcset(img, src) {
  if (!src) return;
  var thumbSrc = getThumbSrc(src);
  var mobileSrc = getMobileSrc(src);
  var desktopSrc = getDesktopSrc(src);
  img.srcset = thumbSrc + ' 200w, ' + mobileSrc + ' 800w, ' + desktopSrc + ' 1400w';
  img.sizes = '(max-width: 768px) 100vw, 50vw';
  // Use desktop version as default src too
  img.src = desktopSrc;
}
