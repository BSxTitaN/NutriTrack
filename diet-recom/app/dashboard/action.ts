// How to restrict a page with server action

// "use server";

// import { verifySession } from "../_lib/session";

// export async function banUser() {
//   const session = await verifySession();
//   const role = session?.role;

//   if (role != "Admin") {
//     return { error: "unauthorized!" };
//   }
// }


// condition rendering also done with session veriable or with Providers