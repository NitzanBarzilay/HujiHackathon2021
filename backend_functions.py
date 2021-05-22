import sqlite3
import json
from typing import Dict, Any

def val(par):
    if isinstance(par, str):
        return "'" + par + "'"
    else:
        return str(par)


def add_values(lst):
    my_str = "VALUES ("
    for s in lst:
        my_str += val(s) + ", "
    return my_str[:-2] + ")"


def add_user(name, email, type="b", vegan_friendly="false", second_hand="false",
             kosher="false", eco_friendly="false", social_business="false",
             made_in_israel="false"):
    """
    :param name: string
    :param email: string
    :param type: b/a/c
    :param vegan_friendly: y/n
    :param second_hand: y/n
    :param kosher: y/n
    :param eco_friendly: y/n
    :param social_business: y/n
    :param made_in_israel: y/n
    :return:
    """
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    stmt = "INSERT INTO users (name, email, type, vegan_friendly, " \
           "second_hand, kosher, eco_friendly, social_business," \
           " made_in_israel) " + add_values([name, email, type, vegan_friendly,
                                             second_hand, kosher, eco_friendly,
                                             social_business, made_in_israel])
    cur.execute(stmt)
    cur.execute("COMMIT")


def add_store(store_name, email, description, city, category, image_url,
              vegan_friendly, second_hand, kosher, eco_friendly,
              social_business, made_in_israel):
    """
    :param store_name: string
    :param email: string
    :param description: string
    :param city: string
    :param category: string
    :param image_url: string
    :param vegan_friendly: string(y/n)
    :param second_hand: string(y/n)
    :param kosher: string(y/n)
    :param eco_friendly: string(y/n)
    :param social_business: string(y/n)
    :param made_in_israel: string(y/n)
    :return: void
    """
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    stmt = "INSERT INTO stores (store_name, email, description, city, " \
           "category, image_url, vegan_friendly, second_hand, " \
           "kosher,eco_friendly, social_business, made_in_israel) " + \
           add_values([store_name, email, description, city, category,
                       image_url, vegan_friendly, second_hand, kosher,
                       eco_friendly, social_business, made_in_israel])
    cur.execute(stmt)
    cur.execute("COMMIT")


def add_product(name, price, description, recommended, email):
    """
    :param name: string
    :param price: float
    :param description: string
    :param recommended: string(y/n)
    :param email: string
    :return:
    """
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    stmt = "INSERT INTO products (name, price, description, recommended," \
           " email) " + add_values([name, price, description, recommended,
                                    email])
    cur.execute(stmt)
    cur.execute("COMMIT")


def get_store_products(email):
    """
    :param email: the email of the store owner
    :return: json file containing all the products of the store
    """
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    stmt = "SELECT * FROM products WHERE email == " + val(email)
    prd = cur.execute(stmt).fetchall()
    return json.dumps(prd)


def prod_rec_status(email, name, new_status):
    """
    :param email: string, owner
    :param name: string
    :param new_status: y/n
    :return:
    """
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    stmt = "UPDATE products SET recommended = " + val(new_status) + \
           " WHERE email == " + val(email) \
           + "AND name == " + val(name)
    cur.execute(stmt)


def delete_product(email, name):
    """
    :param email: string
    :param name: string
    :return:
    """
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    stmt = "DELETE FROM products WHERE email == " + val(email) \
           + "AND name == " + val(name)
    cur.execute(stmt)
    cur.execute("COMMIT")


def main():
    add_user("sason", "sasonhamadlik@gmail.com")
    print(cur.execute("SELECT * FROM users").fetchall())


def stores_row_to_dict(row: list) -> dict:
    return {
        "name": row[0],
        "email": row[1],
        "description": row[2],
        "city": row[3],
        "category": row[4],
        "image_url": row[5],
        "vegan_friendly": row[6],
        "second_hand": row[7],
        "kosher": row[8],
        "eco_friendly": row[9],
        "social_business": row[10],
        "made_in_israel": row[11]
    }


def get_store_by_val(column: str, value: Any) -> dict:
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    sqlite_select_query = "SELECT * FROM stores WHERE " + column + " == " \
                          + val(value)
    cur.execute(sqlite_select_query)
    rows = cur.fetchall()
    stores = [stores_row_to_dict(row) for row in rows]
    return stores


def get_store_by_principles(filters: Dict[str, bool]):
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    query = "SELECT * FROM stores"
    where_needed = any(v for v in filters.values())
    if where_needed:
        query += " WHERE "
        for arg_name, should_filter in filters.items():
            if should_filter:
                query += f"{arg_name} = true AND "
        query = query[:-5]
    # print(f"Will execute: {query}")
    cur.execute(query)
    rows = cur.fetchall()
    stores = [stores_row_to_dict(row) for row in rows]
    return stores


def products_row_to_dict(row: list) -> dict:
    return {
        "name": row[0],
        "price": row[1],
        "description": row[2],
        "email": row[3],
        "image_url": row[4]
    }

def get_user_by_email(email):
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    sqlite_select_query = "SELECT * FROM users WHERE email == " + val(email)
    cur.execute(sqlite_select_query)
    user = cur.fetchall()
    return user


def get_store_by_email(email):
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    sqlite_select_query = "SELECT * FROM stores WHERE email == " + val(email)
    cur.execute(sqlite_select_query)
    rows = cur.fetchall()
    stores = [stores_row_to_dict(row) for row in rows]
    return stores


def get_products_by_email(email):
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    sqlite_select_query = "SELECT * FROM products WHERE email == " + val(email)
    cur.execute(sqlite_select_query)
    rows = cur.fetchall()
    products = [products_row_to_dict(row) for row in rows]
    return products
