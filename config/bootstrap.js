/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // User.create({
  //   name: 'Gisselle Diaz',
  //   email: 'user@email.com',
  //   password: '123456',
  //   avatar: 'http://www.tum.ac.ke/assets/images/avatar.png'
  // }).then(user => {
  //   sails.log(user);
  // });

  // Course.create({
  //   title: 'Abono Orgánico',
  //   subtitle: 'Lorem ipsum dolor sit amet, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   slug: 'abono-organico',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg',
  //   instructor: 'Ing. Carlos Luna',
  //   hours: 40
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 1',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Creando conciencia en las escuelas',
  //   subtitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   slug: 'creando-conciencia-en-las-escuelas',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://www.fondox.net/wallpapers/un-valle-natural-1136.jpg',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 2',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 3',
  //   subtitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  //   slug: 'title-3',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 3',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 4',
  //   subtitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  //   slug: 'title-4',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 4',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 5',
  //   subtitle: 'Ut enim ad minim veniam, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  //   slug: 'title-5',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 4',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 6',
  //   subtitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   slug: 'title-6',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 4',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 7',
  //   subtitle: 'Ut enim ad minim ullamco laboris nisi ut aliquip ex ea commodo consequat veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  //   slug: 'title-7',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 4',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 8',
  //   subtitle: 'Ut enim ad minim veniam,  ad minim veniam, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  //   slug: 'title-8',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 4',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });
  //
  // Course.create({
  //   title: 'Tittle 9',
  //   subtitle: 'Ut enim ad minim veniam m ad minim veniam m ad minim veniam m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  //   slug: 'title-9',
  //   description: '<strong>Lorem ipsum dolor sit amet</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  //   image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548',
  //   hours: 40,
  //   instructor: 'Carlos Luna'
  // }).then(course => {
  //     Period.create({
  //       name: 'Periodo 4',
  //       course: course.id
  //     }).then(period => {
  //       sails.log(period);
  //     });
  // });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
