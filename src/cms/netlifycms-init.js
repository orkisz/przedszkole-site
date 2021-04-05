import CMS from 'netlify-cms-app';
import { pl } from 'netlify-cms-locales';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerLocale('pl', pl);
CMS.registerMediaLibrary(cloudinary);
