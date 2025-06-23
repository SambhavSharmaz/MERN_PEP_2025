const searchquery = window.location.search;
console.log(searchquery);
const res = searchquery.split('=');
console.log(res);
const videoid = res[1];
const iframe = document.getElementsByTagName('iframe')[0];
iframe.setAttribute('src', `https://www.youtube.com/embed/${videoid}`);