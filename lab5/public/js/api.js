const BASE_URL = "http://localhost:5050/api";
const RESOURSE_URL = `${BASE_URL}/cars`;

const baseRequest = async ({ path = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
    };
    if (body) {
        reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${RESOURSE_URL}${path}`, reqParams);
    } catch (error) {
    console.error("HTTP ERROR: ", error);
    }
};

// findAll
export const getAllCars = async () => {

    const rawResp = await baseRequest({path: "/", method: "GET"});
    
    console.log("getting");
    const data = await rawResp.json();
    return data;
}

export const deleteAllCars = async() => {

    const rawResp = await baseRequest({path: "/", method: "DELETE"});
    console.log("deleting");
}

// create
export const postCar = (body) => baseRequest({path: "/", method: "POST", body});

// update
export const editCar = (id, body) => baseRequest({path: `/${id}`, method: "PUT", body});

// delete
export const deleteCar = (id) => baseRequest({path: `/${id}`, method: "DELETE"});

// findOne
// export const getPlaneById = async (id) => {

//     const rawResp = await baseRequest({path: `/${id}`, method: "GET"});
//     return rawResp.json();
// } 