/* responsive-images.js — Adds srcset for responsive images
 * Three sizes: thumb (200px), mobile (800px), desktop (1400px)
 * Images in 'thumb/', 'mobile/', 'desktop/' subfolders as .jpg
 */

function getBasePath(src) {
  if (!src) return { dir: '', filename: '' };
  // Strip /desktop/, /mobile/, /thumb/ from path if present
  var cleaned = src.replace(/\/(desktop|mobile|thumb)\//, '/');
  var lastSlash = cleaned.lastIndexOf('/');
  var dir = cleaned.substring(0, lastSlash);
  var filename = cleaned.substring(lastSlash + 1);
  var dotIdx = filename.lastIndexOf('.');
  var jpgName = dotIdx !== -1 ? filename.substring(0, dotIdx) + '.jpg' : filename;
  return { dir: dir, filename: jpgName };
}

function getMobileSrc(src) {
  var p = getBasePath(src);
  return p.dir + '/mobile/' + p.filename;
}

function getThumbSrc(src) {
  var p = getBasePath(src);
  return p.dir + '/thumb/' + p.filename;
}

function getDesktopSrc(src) {
  var p = getBasePath(src);
  return p.dir + '/desktop/' + p.filename;
}

function addSrcset(img, src) {
  if (!src) return;
  var thumbSrc = getThumbSrc(src);
  var mobileSrc = getMobileSrc(src);
  var desktopSrc = getDesktopSrc(src);
  img.srcset = thumbSrc + ' 200w, ' + mobileSrc + ' 800w, ' + desktopSrc + ' 1400w';
  img.sizes = '(max-width: 768px) 100vw, 50vw';
  img.src = desktopSrc;
}
