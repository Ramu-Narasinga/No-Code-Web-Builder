import cheerio from "cheerio";
import ViewsDao from "../daos/views.dao";

class ViewsService {
  updateSvgWithCount(count: number) {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="97" height="17" viewBox="0 0 97 17" fill="none" style="&#10;    height: 40px;&#10;    width: 150px;&#10;">
  <rect width="97" height="17" rx="1" fill="#525252"/>
  <rect x="34" width="63" height="17" rx="1" fill="#5551FF"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M10.4961 6.63672L8.73047 11H7.99219L6.23828 6.63672H7.03516L8.38672 10.1094L9.72656 6.63672H10.4961ZM12.2461 5.90625H11.418V5.14453H12.2461V5.90625ZM12.1992 11H11.4648V6.63672H12.1992V11ZM17.3047 8.89453H14.0898C14.0898 9.16276 14.1302 9.39714 14.2109 9.59766C14.2917 9.79557 14.4023 9.95833 14.543 10.0859C14.6784 10.2109 14.8385 10.3047 15.0234 10.3672C15.2109 10.4297 15.4167 10.4609 15.6406 10.4609C15.9375 10.4609 16.2357 10.4023 16.5352 10.2852C16.8372 10.1654 17.0521 10.0482 17.1797 9.93359H17.2188V10.7344C16.9714 10.8385 16.7188 10.9258 16.4609 10.9961C16.2031 11.0664 15.9323 11.1016 15.6484 11.1016C14.9245 11.1016 14.3594 10.9062 13.9531 10.5156C13.5469 10.1224 13.3438 9.5651 13.3438 8.84375C13.3438 8.13021 13.5378 7.5638 13.9258 7.14453C14.3164 6.72526 14.8294 6.51562 15.4648 6.51562C16.0534 6.51562 16.5065 6.6875 16.8242 7.03125C17.1445 7.375 17.3047 7.86328 17.3047 8.49609V8.89453ZM16.5898 8.33203C16.5872 7.94661 16.4896 7.64844 16.2969 7.4375C16.1068 7.22656 15.8164 7.12109 15.4258 7.12109C15.0326 7.12109 14.7188 7.23698 14.4844 7.46875C14.2526 7.70052 14.1211 7.98828 14.0898 8.33203H16.5898ZM23.9062 6.63672L22.7695 11H22.0898L20.9688 7.63672L19.8555 11H19.1797L18.0312 6.63672H18.7969L19.5977 10.0156L20.6875 6.63672H21.293L22.4102 10.0156L23.168 6.63672H23.9062ZM28.082 9.74219C28.082 10.1406 27.9167 10.4674 27.5859 10.7227C27.2578 10.9779 26.8086 11.1055 26.2383 11.1055C25.9154 11.1055 25.6185 11.0677 25.3477 10.9922C25.0794 10.9141 24.8542 10.8294 24.6719 10.7383V9.91406H24.7109C24.9427 10.0885 25.2005 10.2279 25.4844 10.332C25.7682 10.4336 26.0404 10.4844 26.3008 10.4844C26.6237 10.4844 26.8763 10.4323 27.0586 10.3281C27.2409 10.224 27.332 10.0599 27.332 9.83594C27.332 9.66406 27.2826 9.53385 27.1836 9.44531C27.0846 9.35677 26.8945 9.28125 26.6133 9.21875C26.5091 9.19531 26.3724 9.16797 26.2031 9.13672C26.0365 9.10547 25.8841 9.07161 25.7461 9.03516C25.3633 8.93359 25.0911 8.78516 24.9297 8.58984C24.7708 8.39193 24.6914 8.14974 24.6914 7.86328C24.6914 7.68359 24.7279 7.51432 24.8008 7.35547C24.8763 7.19661 24.9896 7.05469 25.1406 6.92969C25.2865 6.80729 25.4714 6.71094 25.6953 6.64062C25.9219 6.56771 26.1745 6.53125 26.4531 6.53125C26.7135 6.53125 26.9766 6.5638 27.2422 6.62891C27.5104 6.69141 27.7331 6.76823 27.9102 6.85938V7.64453H27.8711C27.6836 7.50651 27.4557 7.39062 27.1875 7.29688C26.9193 7.20052 26.6562 7.15234 26.3984 7.15234C26.1302 7.15234 25.9036 7.20443 25.7188 7.30859C25.5339 7.41016 25.4414 7.5625 25.4414 7.76562C25.4414 7.94531 25.4974 8.08073 25.6094 8.17188C25.7188 8.26302 25.8958 8.33724 26.1406 8.39453C26.276 8.42578 26.4271 8.45703 26.5938 8.48828C26.763 8.51953 26.9036 8.54818 27.0156 8.57422C27.3568 8.65234 27.6198 8.78646 27.8047 8.97656C27.9896 9.16927 28.082 9.42448 28.082 9.74219Z" fill="white"/>    
  <text x="65" y="12" font-family="Arial" font-size="10" fill="white" text-anchor="middle">${count}</text>
  </svg>`;

    const $ = cheerio.load(svgContent, { xmlMode: true });

    // Update the value of tthroo-views-counter-opc and tthroo-views-counter elements
    const elementToUpdateOpc = $("#tthroo-views-counter-opc");
    const elementToUpdateCounter = $("#tthroo-views-counter");
    elementToUpdateOpc.text(`${count}`);
    elementToUpdateCounter.text(`${count}`);

    // Get the updated SVG content
    const updatedSvgContent = $.xml();

    return updatedSvgContent;
  }

  async incrViewsCount(url: string): Promise<number> {
    return await ViewsDao.incrViewsCount(url) ?? 0;
  }
}

export default new ViewsService();
