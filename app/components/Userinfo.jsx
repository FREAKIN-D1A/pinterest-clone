import Image from "next/image";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function UserInfo({ userInfo }) {
	console.log(userInfo);
	const router = useRouter();
	const { data: session } = useSession();

	// const onLogoutClick = async () => {
	// 	await signOut();
	// 	router.push("/");
	// };

	useEffect(() => {
		session ? null : router.push("/");
	}, [session]);

	return (
		<div className='flex flex-col items-center'>
			<Image
				src={userInfo.userImage}
				alt='userImage'
				width={200}
				height={200}
				className='rounded-full'
			/>
			<h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
			<h2 className='text-gray-400'>{userInfo.email}</h2>
			<div className='flex gap-4'>
				<button className='bg-gray-200  p-2 px-3 font-semibold mt-5 rounded-full'>
					Share
				</button>

				{session?.user.email == userInfo.email ? (
					<button
						className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'
						onClick={async () => {
							await signOut();
							router.push("/");
						}}>
						Logout
					</button>
				) : null}
			</div>
		</div>
	);
}

export default UserInfo;
