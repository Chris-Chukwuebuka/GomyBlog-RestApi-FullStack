// Search Engine Optimization
// This file is used to set the SEO for the website. It is used to set the meta tags for the website.
// It is used to set the title, description, and image for the website.

const SEO = (data={}) => {
    document.title = data.title ? data.title : "Default Title";
    document.querySelector('meta[name="description"]').setAttribute("content", data.metaDescription);
}

export default SEO;