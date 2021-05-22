import sqlite3
import pandas as pd

con = sqlite3.connect("data.db")
cur = con.cursor()


def create_table(name, values, csv):
    stmt = "CREATE TABLE " + name + " (" + values + ")"
    cur.execute(stmt)
    t = pd.read_csv(csv)
    t.to_sql(name, con, if_exists='append', index = False)


def main():
    create_table("products", "name text, price float, description text, recommended text, email text, image_url text", "products.csv")
    create_table("stores", "store_name text, email text, description text, city text, category text, image_url text, vegan_friendly \
                  text, second_hand text, kosher text, eco_friendly text, social_business text, made_in_israel text",
                 "stores.csv")
    create_table("users", "name text ,email text, type text, vegan_friendly text, \
             second_hand text, kosher text, eco_friendly text, social_business text, made_in_israel text",  "users.csv")
    
if __name__ == "__main__":
    main()