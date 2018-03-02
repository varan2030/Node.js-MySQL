# BAMAZON

## Customer Menu

Created an Amazon-like storefront using MySQL, the MySQL NPM Package, and the Prompt Package.

The app will take in orders from customers and deplete stock from the store's inventory. The app track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.

Initializing node bamazonCustomer.js in the command line brings up the storefront. It will ask you what you'd like to purchase by item number and how many:

![Image Customer List](https://github.com/varan2030/Node.js-MySQL/blob/master/images/customer_list.png)

If there are enough quantities the app calculate your total amout and then offer to proceed or finish your purshase.

## Manager Menu

Initializing node bamazonManager.js in the command line brings up the storefront. It will appear following options:

##### View Products For Sale 

This option allows to manager to check the products price and quantity

![Image Manager Menu](https://github.com/varan2030/Node.js-MySQL/blob/master/images/manager_menu.png)

##### View Low Inventory 

This option allows to manager to check the products less then 5 pieces

##### Add to Inventory

This option allows to manager to add pieces of products 

![Image Add pieces option](https://github.com/varan2030/Node.js-MySQL/blob/master/images/add_inventory.png)

##### Add New Product 

This option allows to manager to add new products to the store 

![Image Add new Product](https://github.com/varan2030/Node.js-MySQL/blob/master/images/add_new_product.png)

## Supervisor Menu

Initializing node bamazonSupervisor.js in the command line brings up the storefront. Supervisor has two options:

Overview the products costs, sales and profit by Departments

##### View Sales by Departments

![Image Sales by Departments](https://github.com/varan2030/Node.js-MySQL/blob/master/images/supervisor_overview.png)

##### View Total Sales and Profit

Overview the Total costs, sales and profit of the store

![Image Total sales and profit](https://github.com/varan2030/Node.js-MySQL/blob/master/images/total_profit_overview.png)