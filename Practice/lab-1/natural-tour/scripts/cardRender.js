const postContentList = document.querySelector('.post-content-list');
const template = document.getElementById('post-content-item-template');

const items = [
  {
    imgSrc: './assets/images/content_1.jpeg',
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam monummy nibh.',
  },
  {
    imgSrc: './assets/images/content_2.jpeg',
    title: 'See diam nonummy',
    description:
      'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
  },
  {
    imgSrc: './assets/images/content_3.jpeg',
    title: 'Nam liber tempor',
    description:
      'Nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait.',
  },
  {
    imgSrc: './assets/images/content_4.jpeg',
    title: 'Ut wisi enim',
    description:
      'Lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur.',
  },
  {
    imgSrc: './assets/images/content_5.jpeg',
    title: 'Duis autem vel',
    description:
      'Legere me lius quod ii est etiam processus dynamicus, qui seacula quart adecima et quinta decima. Modo typi luptatum zzril delenit augue.',
  },
  {
    imgSrc: './assets/images/content_6.jpeg',
    title: 'Eodem modo typi',
    description:
      'Anteposuerit litterarum formas humanitatis per seacula quarta decima etquinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
  },
];

items.forEach((item) => {
  const clone = document.importNode(template.content, true);
  clone.querySelector('img').src = item.imgSrc;
  clone.querySelector('.post-content-title').textContent = item.title;
  clone.querySelector('p').textContent = item.description;
  postContentList.appendChild(clone);
});
