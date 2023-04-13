import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
export const Banner = () => {
  const router = useRouter();
  const { pathname = "/" } = useRouter();
  const data = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Posts",
      path: "/blog",
    },
    {
      name: "Archives",
      path: "/archives",
    },
    {
      name: "Tags",
      path: "/tags",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  const goHome = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };
  console.log(pathname, "pathname");
  return (
    <section className="fixed z-10 flex h-18 w-full justify-center bg-homebg">
      <section className="p-4 flex flex-row w-screen max-w-screen-2xl justify-between items-center">
        <div onClick={goHome} className="cursor-pointer p-2">
          <img
            className="w-7 inline mr-1"
            src={"https://www.bythewayer.com/img/logo1.webp"}
            alt="MyBlog"
          />
          {/* <p className="font-bold inline">My Blog</p> */}
        </div>
        <div>
          <ul className="flex flex-row ">
            {data.map((item) => {
              return (
                <li
                  className="mr-1 md:mr-2 cursor-pointer p-1 md:p-2"
                  key={item.name}
                >
                  <Link href={item.path}>
                    <span
                      className={clsx({
                        "text-red-500": pathname === item.path,
                        "text-underline": pathname === item.path,
                      })}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
};
