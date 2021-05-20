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
    create_table("products", "id integer, name text, store_id integer, category text, price float", "products.csv")
    create_table("stores", "id integer, name text, category text, location text, contact integer, email text", "stores.csv")
    create_table("users", "id integer, username text ,type text, email text, password text", "users.csv")


if __name__ == "__main__":
    main()