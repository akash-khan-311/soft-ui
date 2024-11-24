import CodeBox from "@/components/Shared/Codebox/CodeBox";
import Image from "next/image";

const Table5 = () => {
  const tableData = [
    {
      img: "https://images.unsplash.com/photo-1613588718956-c2e80305bf61",
      name: "Appple",
      category: "Technology",
      price: "200.00$",
      status: "available",
      email: "test@gmail.com",
    },
    {
      img: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a",
      name: "Realme",
      category: "Technology",
      price: "200.00$",
      status: "unavailable",
      email: "test@gmail.com",
    },
    {
      img: "https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80",
      name: "Samsung",
      category: "Technology",
      price: "200.00$",
      status: "available",
      email: "test@gmail.com",
    },
  ];
  return (
    <>
      <CodeBox
        stringCode={`const Table = () => {
const tableData = [
    {
      img: "https://images.unsplash.com/photo-1613588718956-c2e80305bf61",
      name: "Appple",
      category: "Technology",
      price: "200.00$",
      status: "available",
      email: "test@gmail.com",
    },
    {
      img: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a",
      name: "Realme",
      category: "Technology",
      price: "200.00$",
      status: "unavailable",
      email: "test@gmail.com",
    },
    {
      img: "https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80",
      name: "Samsung",
      category: "Technology",
      price: "200.00$",
      status: "available",
      email: "test@gmail.com",
    },
  ];
  return (
   <div className="col-span-12">
    <div className="overflow-auto lg:overflow-visible ">
      <table className="[border-spacing:0_15px] text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-gray-800 text-gray-500">
          <tr className="rounded-[20px]">
            <th className="p-3">Brand</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((table, i) => (
            <tr key={i} className="bg-gray-800 rounded-[20px]">
              <td className="p-3">
                <div className="flex align-items-center">
                  <img
                    className="rounded-full h-12 w-12  object-cover"
                    src={table.img}
                    alt="unsplash image"
                  />
                  <div className="ml-3">
                    <div className>{table.name}</div>
                    <div className="text-gray-500">{table.email} </div>
                  </div>
                </div>
              </td>
              <td className="p-3">Technology</td>
              <td className="p-3 font-bold">{table.price}</td>
              <td className="p-3">
                <span
                  className={\`text-gray-50 rounded-md px-2 \${
                    table.status === "available"
                      ? "bg-green-400"
                      : "bg-red-400"
                  }  \`}
                >
                  {table.status}
                </span>
              </td>
              <td className="p-3 ">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-100 mr-2"
                >
                  <i className="text[1rem] material-icons-outlined text-base">
                    visibility
                  </i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-100  mx-2"
                >
                  <i className="text[1rem] material-icons-outlined text-base">
                    edit
                  </i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-100  ml-2"
                >
                  <i className="text[1rem] material-icons-round text-base">
                    delete_outline
                  </i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  )
}
            
`}
      >
        <div className="flex items-center justify-center  ">
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
              <table className="[border-spacing:0_15px] text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                  <tr className="rounded-[20px]">
                    <th className="p-3">Brand</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((table, i) => (
                    <tr key={i} className="bg-gray-800 rounded-[20px]">
                      <td className="p-3">
                        <div className="flex align-items-center">
                          <Image
                            alt={table.name}
                            height={50}
                            width={50}
                            className="rounded-full h-12 w-12  object-cover"
                            src={table.img}
                          />
                          <div className="ml-3">
                            <div className>{table.name}</div>
                            <div className="text-gray-500">{table.email} </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">Technology</td>
                      <td className="p-3 font-bold">{table.price}</td>
                      <td className="p-3">
                        <span
                          className={`${
                            table.status === "available"
                              ? "bg-green-400"
                              : "bg-red-400"
                          }  text-gray-50 rounded-md px-2`}
                        >
                          {table.status}
                        </span>
                      </td>
                      <td className="p-3 ">
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-100 mr-2"
                        >
                          <i className="text[1rem] material-icons-outlined text-base">
                            visibility
                          </i>
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-100  mx-2"
                        >
                          <i className="text[1rem] material-icons-outlined text-base">
                            edit
                          </i>
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-100  ml-2"
                        >
                          <i className="text[1rem] material-icons-round text-base">
                            delete_outline
                          </i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Table5;
