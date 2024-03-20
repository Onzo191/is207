const postContentList = document.querySelector('.blog-container');
const template = document.getElementById('blog-template');

const blogs = [
  {
    imgSrc: './assets/images/content-1.jpeg',
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam monummy nibh.',
  },
  {
    imgSrc: './assets/images/content-2.jpeg',
    title: 'See diam nonummy',
    description:
      'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
  },
  {
    imgSrc: './assets/images/content-3.jpeg',
    title: 'Nam liber tempor',
    description:
      'Nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait.',
  },
  {
    imgSrc: './assets/images/content-4.jpeg',
    title: 'Ut wisi enim',
    description:
      'Lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur.',
  },
  {
    imgSrc: './assets/images/content-5.jpeg',
    title: 'Duis autem vel',
    description:
      'Legere me lius quod ii est etiam processus dynamicus, qui seacula quart adecima et quinta decima. Modo typi luptatum zzril delenit augue.',
  },
  {
    imgSrc: './assets/images/content-6.jpeg',
    title: 'Eodem modo typi',
    description:
      'Anteposuerit litterarum formas humanitatis per seacula quarta decima etquinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
  },
];

blogs.forEach((blog) => {
  const { imgSrc, title, description } = blog;
  const clone = document.importNode(template.content, true);
  clone.querySelector('img').src = imgSrc;
  clone.querySelector('.blog-title').textContent = title;
  clone.querySelector('p').textContent = description;
  postContentList.appendChild(clone);
});
