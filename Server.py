from flask import Flask, request
import backend_functions as funcs
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# -------------------------------- User --------------------------------- #

@app.route('/add_user', methods=['POST'])
@cross_origin()
def add_user():
    """
    Adds a new user with given parameters to the DB.
    :return: None
    """
    name = request.args.get("name")
    email = request.args.get("email")
    type = request.args.get("type", default="b")
    vegan_friendly = request.args.get("vegan_friendly", default="false")
    second_hand = request.args.get("second_hand", default="false")
    kosher = request.args.get("kosher", default="false")
    eco_friendly = request.args.get("eco_friendly", default="false")
    social_business = request.args.get("social_business", default="false")
    made_in_israel = request.args.get("made_in_israel", default="false")
    funcs.add_user(name, email, type, vegan_friendly, second_hand,
                   kosher, eco_friendly,
                   social_business, made_in_israel)
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


# --------------------------------- Store ---------------------------------- #

@app.route('/add_store', methods=['POST'])
@cross_origin()
def add_new_store():
    """
    Adds a new store with given parameters to the DB.
    :return: None
    """
    email = request.args.get("email")
    store_name = request.args.get("store_name")
    description = request.args.get("description")
    city = request.args.get("city")
    category = request.args.get("category")
    image_url = request.args.get("image_url")
    vegan_friendly = request.args.get("vegan_friendly", default="false")
    second_hand = request.args.get("second_hand", default="false")
    kosher = request.args.get("kosher", default="false")
    eco_friendly = request.args.get("eco_friendly", default="false")
    social_business = request.args.get("social_business", default="false")
    made_in_israel = request.args.get("made_in_israel", default="false")
    print (store_name, email, description, city, category, image_url, vegan_friendly, second_hand, kosher, eco_friendly, social_business, made_in_israel)
    funcs.add_store(store_name, email, description, city, category, image_url, vegan_friendly, second_hand, kosher, eco_friendly, social_business, made_in_israel)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

@app.route('/stores_by_category', methods=['GET'])
@cross_origin()
def get_store_by_category():
    """
    :return: JSON file of all of the stores in the database that belong to
    the given category.
    """

    category = request.args.get("category")
    result = funcs.get_store_by_val("category", category)
    return json.dumps(result)


@app.route('/stores_by_city', methods=['GET'])
@cross_origin()
def get_store_by_city():
    """
    :return: JSON file of all of the stores in the database that belong to
    the given city.
    """
    city = request.args.get("city")
    result = funcs.get_store_by_value("city", city)
    return json.dumps(result)


@app.route('/stores_by_user_principles', methods=['GET'])
@cross_origin()
def get_store_by_principles():
    """
    :return: JSON file of all of the stores in the database that matches the
    principles of given user (supplied by email).
    """
    email = request.args.get("email")
    result = funcs.get_store_by_principles(email)
    return json.dumps(result)


# -------------------------------- Product --------------------------------- #

@app.route('/add_product', methods=['POST'])
@cross_origin()
def add_new_product():
    """
    Adds a new product with given parameters to the DB.
    :return: None
    """
    name = request.args.get("name")
    email = request.args.get("email")
    description = request.args.get("description")
    price = request.args.get("price")
    recommended = request.args.get("recommended", default="n")
    funcs.add_product(name, price, description, recommended, email)
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@app.route('/delete_product', methods=['POST'])
@cross_origin()
def delete_product():
    """
    :return: JSON of all of the products in given store (by email)
    """
    name = request.args.get("name")
    email = request.args.get("email")
    funcs.delete_product(name, email)
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

@app.route('/store_by_email', methods=['GET'])
@cross_origin()
def get_store_by_email():
    """

    :return: None
    """
    email = request.args.get("email")
    result = funcs.get_store_by_email(email)
    return json.dumps(result)

@app.route('/products_in_store', methods=['GET'])
@cross_origin()
def get_store_products():
    """

    :return: None
    """
    email = request.args.get("email")
    result = funcs.get_store_products(email)
    return json.dumps(result)


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
