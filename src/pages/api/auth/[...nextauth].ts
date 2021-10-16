import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: `INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw`,
    signingKey: `{"kty":"oct","kid":"SMu75TYSpJ0KH5saWTo-9FcMBgvwznjb1jsIYJ3pG3k","alg":"HS512","k":"bKs8kaphhzJUast2-MWwPRFf0XhcD_dxRJkadYHkw-2n5yCeAmMIfATfFLewi2juUJ5HW9wUdvEFRp7GRnCVXA"}`,
    verificationOptions: {
      algorithms: [`HS512`],
    },
  },
});
