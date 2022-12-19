

import React, { useState, useEffect } from 'react';
import axios from 'axios';


async function fetchData() {
    const result = await axios.post('https://data.mongodb-api.com/app/data-uaoux/endpoint/data/v1/action/findOne', {
        "collection":"Game of Thrones Characters",
        "database":"gotcharacters",
        "dataSource":"Cluster0",
    });
    return result.data
}


export default fetchData;
