exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('company').del()
      .then(function() {
        // Inserts seed entries
        return knex('company').insert([
          {
            id: 1,
            industry_id: 1,
            location_id: 1,
            name: 'Google',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@google.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 2,
            industry_id: 2,
            location_id: 2,
            name: 'Microsoft',
            profile_img: 'http://media02.hongkiat.com/creative_modern_office_design/Syzygy_Hamburg.jpg',
            email: 'info@microsoft.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 3,
            industry_id: 3,
            location_id: 3,
            name: 'Hackreactor',
            profile_img: 'https://static1.squarespace.com/static/5479588fe4b0780d55bd8b89/t/56e099ff1bbee02674eac3d4/1457560089315/?format=500w',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 4,
            industry_id: 2,
            location_id: 2,
            name: 'Hackreactor',
            profile_img: 'https://storieswf-wpengine.netdna-ssl.com/wp-content/uploads/00864_Content_1-new.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 5,
            industry_id: 5,
            location_id: 5,
            name: 'NFL',
            profile_img: 'http://aff.bstatic.com/images/hotel/max500/848/84883888.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 6,
            industry_id: 6,
            location_id: 6,
            name: 'NBA',
            profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTe8JXCUazgwXBFKEzBlT5ly4R8ZOelQUx8ZsrqmctyZidyqXR',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 7,
            industry_id: 7,
            location_id: 7,
            name: 'Samsung',
            profile_img: 'http://68.media.tumblr.com/957d349eb2afdb1ea977efc31e0c20c2/tumblr_inline_n3eto64eu11sx54vl.png',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 8,
            industry_id: 8,
            location_id: 8,
            name: 'Sony',
            profile_img: 'http://imgs.abduzeedo.com/files/paul0v2/google-headquarters/googleplex-13.png',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 9,
            industry_id: 9,
            location_id: 9,
            name: 'Panasonic',
            profile_img: 'http://visualdrugstore.com/wp-content/uploads/2013/11/LEY_0847_Arbeitskopie_2-500x330.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 10,
            industry_id: 10,
            location_id: 10,
            name: 'Twitter',
            profile_img: 'https://s-media-cache-ak0.pinimg.com/originals/36/d2/02/36d2020c896f964eb92a4f3e810599a5.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 11,
            industry_id: 1,
            location_id: 1,
            name: 'Tampax',
            profile_img: 'http://media02.hongkiat.com/creative_modern_office_design/Coaxis.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 12,
            industry_id: 2,
            location_id: 2,
            name: 'Kellogs',
            profile_img: 'https://s-media-cache-ak0.pinimg.com/originals/a5/c3/3d/a5c33d2e0bdfee2bcfca035b26a22886.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 13,
            industry_id: 3,
            location_id: 3,
            name: 'McDonalds',
            profile_img: 'http://www.uakron.edu/cpspe/images/npic-building-4.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 14,
            industry_id: 4,
            location_id: 4,
            name: 'Burger King',
            profile_img: 'https://images3.bayut.com/common/resize.php?img=4/U_381536/fab03cd0a4b87cc49bf9ef864c5e50ae2017_01_31_05_18_44_3620_lejezuxo_resize_company_code_wd_image_id_57725_md5_cd1a6fc338ee7a554ec42f7c2a683c6d_width_1920_height_1920&w=500&h=500',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 15,
            industry_id: 5,
            location_id: 5,
            name: 'CA Gov',
            profile_img: 'https://s-media-cache-ak0.pinimg.com/originals/9a/34/ae/9a34ae80101f59a57880924df1317957.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          }
        ]);
      });
  });
};
