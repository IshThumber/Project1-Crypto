// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeader = {
//   "x-bingapis-sdk": "true",
//   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//   "x-rapidapi-key": "f80d8bf742mshfc2de04cfe6451bp1c8969jsn01b6259f2f3f"
// };

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// const createRequest = url => ({
//   url,
//   headers: cryptoNewsHeader
// });

// export const cryptoNewsApi = createApi({
//   reducerPath: "cryptoNewsApi ",
//   baseQuery: fetchBaseQuery({
//     baseUrl
//   }),
//   endpoints: builder => ({
//     getCryptos: builder.query({
//       query: ({ newsCategory, count }) =>
//         createRequest(
//           `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
//         )
//     })
//   })
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// // headers: {
// //     'x-bingapis-sdk': 'true',
// //     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// //     'x-rapidapi-key': 'f80d8bf742mshfc2de04cfe6451bp1c8969jsn01b6259f2f3f'
// //   }

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "f80d8bf742mshfc2de04cfe6451bp1c8969jsn01b6259f2f3f"
};

const createRequest = url => ({
  url,
  headers: cryptoNewsHeaders
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com"
  }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        )
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
