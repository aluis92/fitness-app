const request = require('request');

function fetchNutritionix(apiKey, name, callback) {
    const nutritionixPostBody = {
        appId: '12cac74c',
        appKey: apiKey,
        query: name,
        fields:[
            'item_name',
            'brand_name',
            'nf_cholesterol',
            'nf_calories',
            'nf_vitamin',
            'nf_sodium',
            'item_type'
        ],
        filters :{
            item_type : 1
        }
    }

    request.post(
        {
            url: 'https://api.nutritionix.com/v1_1/search',
            headers: {
                'User-Agent': 'request',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(nutritionixPostBody)
        },
        callback
    );
}

module.exports = fetchNutritionix;
