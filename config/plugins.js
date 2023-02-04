// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       config: {
//         provider: 'aws-s3',
//         providerOptions: {
//           accessKeyId: env('strapiAWS_ACCESS_KEY_ID'),
//           secretAccessKey: env('strapiAWS_ACCESS_SECRET'),
//           endpoint: env('strapiAWS_ENDPOINT') | 'https://images-pour-strapi.fra1.digitaloceanspaces.com' // e.g. "s3.fr-par.scw.cloud"
//           params: {
//             Bucket: env('strapiAWS_BUCKET'),
//           },
//         },
//       },
//     },
//     // ...
//   });