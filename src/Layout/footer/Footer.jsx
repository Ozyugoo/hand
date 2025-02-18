import Button from "../../components/navigation/Button.jsx";

const Footer = () => {
  return (
    <div className="bg-lightFoot px-8 md:px-110 lg:px-12">
      <div className=" p-8 flex flex-wrap justify-between ">
        <div className="mb-4 w-full md:w-6/12">
          <a className="text-xl font-bold block mb-7" href="#">
            Hand
          </a>
          <p className="text-gray text-xs">
            We love what we do and create partnerships
          </p>
        </div>

        <div className="">
          <div className="text-left md:text-right mb-7">
            <Button />
          </div>
          <p className="text-left md:text-center mb-4 text-xs">
            hello@devseal.tech
          </p>
          <div className="flex gap-3.5 mt-4">
            <a href="https://www.linkedin.com" target="_blank">
              <svg
                width="35"
                height="35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity=".1"
                  cx="17.5"
                  cy="17.5"
                  r="17.5"
                  fill="#1E1E1E"
                />
                <g>
                  <path
                    d="m19.06 15.897 5.717-6.507h-1.354l-4.966 5.649-3.963-5.649H9.922l5.994 8.543-5.994 6.823h1.354l5.24-5.967 4.187 5.967h4.572M11.765 10.39h2.08l9.577 13.415H21.34"
                    fill="#1E1E1E"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(9.922 9.39)"
                      d="M0 0h15.353v15.366H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="https://www.facebook.com" target="_blank">
              <svg
                width="35"
                height="35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity=".1"
                  cx="17.5"
                  cy="17.5"
                  r="17.5"
                  fill="#1E1E1E"
                />
                <path
                  d="M24.207 10.244H12.5c-1.01 0-1.83.82-1.83 1.83V23.78c0 1.01.82 1.829 1.83 1.829h11.707c1.01 0 1.83-.82 1.83-1.83V12.073c0-1.01-.82-1.83-1.83-1.83Zm-8.78 5.854v6.95h-2.195v-6.95h2.195Zm-2.195-2.024c0-.512.439-.903 1.097-.903.659 0 1.072.391 1.098.903 0 .513-.41.926-1.098.926-.658 0-1.097-.413-1.097-.926Zm10.244 8.975H21.28V19.39c0-.732-.366-1.463-1.28-1.478h-.03c-.886 0-1.251.754-1.251 1.478v3.659h-2.195v-6.951h2.195v.936s.706-.936 2.125-.936c1.453 0 2.63.998 2.63 3.021v3.93Z"
                  fill="#1E1E1E"
                />
              </svg>
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <svg
                width="35"
                height="35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity=".1"
                  cx="17.5"
                  cy="17.5"
                  r="17.5"
                  fill="#1E1E1E"
                />
                <path
                  d="M26.463 20.65c0 3.107-1.852 4.96-4.96 4.96h-1.015a.856.856 0 0 1-.854-.854v-4.925c0-.231.188-.427.418-.427l1.503-.026a.272.272 0 0 0 .247-.213l.3-1.63a.258.258 0 0 0-.257-.3l-1.818.026a.434.434 0 0 1-.436-.418l-.034-2.092c0-.136.111-.256.256-.256l2.05-.034a.252.252 0 0 0 .255-.256l-.034-2.049a.252.252 0 0 0-.256-.256l-2.305.034a2.558 2.558 0 0 0-2.518 2.604l.043 2.347a.423.423 0 0 1-.419.436l-1.024.017a.252.252 0 0 0-.256.256l.025 1.622c0 .145.111.256.256.256l1.025-.017c.239 0 .427.188.435.418l.077 4.866a.855.855 0 0 1-.854.87H14.35c-3.107 0-4.96-1.852-4.96-4.968v-7.145c0-3.107 1.853-4.96 4.96-4.96h7.154c3.107 0 4.96 1.853 4.96 4.96v7.154Z"
                  fill="#1E1E1E"
                />
              </svg>
            </a>

            <a href="https://www.twitter.com" target="_blank">
              <svg
                width="35"
                height="35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity=".1"
                  cx="17.5"
                  cy="17.5"
                  r="17.5"
                  fill="#1E1E1E"
                />
                <path
                  d="M21.182 9h-7.194C10.863 9 9 10.863 9 13.988v7.186c0 3.133 1.863 4.996 4.988 4.996h7.186c3.125 0 4.987-1.863 4.987-4.988v-7.194C26.17 10.863 24.307 9 21.182 9Zm-3.597 11.916a3.334 3.334 0 0 1-3.331-3.331 3.334 3.334 0 0 1 3.331-3.331 3.334 3.334 0 0 1 3.331 3.331 3.334 3.334 0 0 1-3.331 3.331Zm5.082-7.726a.991.991 0 0 1-.18.283.992.992 0 0 1-.283.18.855.855 0 0 1-.936-.18.991.991 0 0 1-.18-.284.855.855 0 0 1-.069-.326c0-.111.026-.223.069-.326a.886.886 0 0 1 .18-.283.857.857 0 0 1 .936-.18.655.655 0 0 1 .154.077c.043.026.086.068.129.103a.886.886 0 0 1 .18.283.855.855 0 0 1 .069.326.855.855 0 0 1-.069.327Z"
                  fill="#1E1E1E"
                />
              </svg>
            </a>

            <a className="flex items-center" href="#" target="_blank">
              <svg
                width="39"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.328 12.5V.58h1.568v5.312h5.968V.58h1.584V12.5H7.864V7.332H1.896V12.5H.328Zm14.118.192c-.566 0-1.067-.101-1.504-.304a2.582 2.582 0 0 1-1.008-.864 2.278 2.278 0 0 1-.368-1.28c0-.459.096-.87.288-1.232.202-.373.512-.688.928-.944.426-.256.96-.437 1.6-.544l3.2-.528v1.248l-2.864.48c-.555.096-.96.272-1.216.528-.246.256-.368.57-.368.944 0 .352.138.645.416.88.288.235.645.352 1.072.352.544 0 1.013-.112 1.408-.336.405-.235.72-.55.944-.944.234-.395.352-.832.352-1.312V6.644c0-.47-.176-.848-.528-1.136-.342-.299-.795-.448-1.36-.448-.491 0-.928.128-1.312.384-.374.245-.651.576-.832.992l-1.296-.672c.16-.395.416-.747.768-1.056a4.05 4.05 0 0 1 2.704-1.024c.661 0 1.242.128 1.744.384.501.245.89.592 1.168 1.04.288.437.432.95.432 1.536V12.5h-1.456v-1.632l.272.096c-.182.341-.427.64-.736.896-.31.256-.672.459-1.088.608-.416.15-.87.224-1.36.224Zm6.675-.192V3.876h1.456v1.68l-.24-.144a2.562 2.562 0 0 1 1.024-1.264c.48-.31 1.04-.464 1.68-.464.618 0 1.168.139 1.648.416.49.277.874.661 1.152 1.152.288.49.432 1.045.432 1.664V12.5h-1.504V7.396c0-.48-.086-.885-.256-1.216a1.826 1.826 0 0 0-.736-.768 1.99 1.99 0 0 0-1.072-.288c-.406 0-.768.096-1.088.288-.31.181-.555.443-.736.784-.182.33-.272.73-.272 1.2V12.5H21.12Zm13.201.192c-.81 0-1.541-.197-2.192-.592a4.263 4.263 0 0 1-1.52-1.616c-.373-.683-.56-1.445-.56-2.288 0-.864.187-1.632.56-2.304a4.263 4.263 0 0 1 1.52-1.616c.65-.395 1.381-.592 2.192-.592.715 0 1.35.155 1.904.464.555.299.992.704 1.312 1.216l-.24.368V.388h1.504V12.5h-1.456v-1.84l.192.256a3.114 3.114 0 0 1-1.312 1.312c-.565.31-1.2.464-1.904.464Zm.128-1.44a2.69 2.69 0 0 0 1.456-.4c.427-.267.763-.63 1.008-1.088a3.22 3.22 0 0 0 .384-1.568c0-.587-.128-1.11-.384-1.568a2.803 2.803 0 0 0-1.008-1.104 2.69 2.69 0 0 0-1.456-.4c-.533 0-1.019.139-1.456.416-.427.267-.763.63-1.008 1.088-.245.448-.368.97-.368 1.568 0 .576.123 1.099.368 1.568.245.459.581.821 1.008 1.088.427.267.912.4 1.456.4Z"
                  fill="#525D6A"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr className="pb-20 lg:w-8/12 w-10/12 mx-auto text-gray" />
      <div className="w-full md:6/12 flex justify-between flex-wrap pb-8">
        <p className="text-gray text-sm">
          <span>&copy;</span> 2024 hand. All Rights Reserved
        </p>

        <div className="flex justify-between text-right text-sm font-bold text-gray">
          <a href="#" className="mx-4 ">
            Privacy Policy
          </a>
          <a href="#" className="ml-4 ">
            Media Kit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
