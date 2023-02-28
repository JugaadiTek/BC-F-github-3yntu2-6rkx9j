function filterLander(gLander) {
    //group json by slug
    console.log(gLander);
    //ctx
    gLander = gLander.data.filter((gLander) => gLander.slug === route.params.slug);
    console.log(gLander);
}  

// group a json by key


