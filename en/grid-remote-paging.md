### **Topic: Implementing Remote Paging for Grid and Tree Grid Components**

---

#### **Introduction**
Remote paging is a feature that allows the grid to load and display data dynamically, fetching only a portion of the data from the server as needed. This results in improved performance, particularly for large datasets, by avoiding the need to fetch all records at once.

---

#### **Key Benefits of Remote Paging**
- **Improved performance:** Only loads necessary data, reducing load times.
- **Scalable:** Handles large datasets efficiently.
- **User control:** Offers flexibility to developers and users in how data is presented.

---

#### **How Remote Paging Works**

Remote paging divides the data into "pages" that are requested individually from a remote server. This ensures that only the necessary slice of data is loaded at a time. It can be configured for both **Grid** and **Tree Grid** components using built-in properties in the tool.

---

#### **User Configuration**

**Steps:**
1. Hook the grid to an endpoint that expects Page and Size query params.
2. Add Remote paging feature and select the **Remote** paging mode to load the Configuration dialog.
3. Hook the totalRecordsCount to a different endpoint (than the grid) that returns the total records count only.
4. Through the **Paging Configuration Dialog**, specify the query param that will be used for **Page Index** and the one used for **Page Size**.
5. Click Save

**Result:**
- Two variables of type number for storing both **Page Index** and **Page Size** values are created.
- Grid data source will have query params bound to the two newly created variables.
- Third variable for storing of the **Total records count** will be created. **Object type**, initialized from data request. (Note, currently AB does not support primitive result types)
- Two interaction for **PerPageChanged** and **PageChange** will be automatically created.
   - **PerPageChange** will have **Source** (value) set to the Page size coming from the Event context provided by the igx-paginator. **Target** variable will be the **Page Size**.
   - **PageChange** will have Source (value) set to the Page index (current page) coming from the Event context provided by the igx-paginator.  **Target** variable will be the **Page Index**.

**Behaviour:**
- Upon going to Preview, initial load will perform two requests, one for the grid sliced data, and one for the total records count. After that, upon page change or per page change, only one request will be made for the Grid sliced data.

#### **UX and Visual Elements (For Designers)**

The remote paging experience in the tool is straightforward, with clear visual cues provided through a **paging chip** that reflects the current page and total record count. The UX flow ensures users can configure paging settings without confusion.

- **Remote Paging Configuration**: A simple configuration interface allows users to switch between different paging modes.
- **Paging Indicators**: Visual states, such as highlighted paging chips, make navigation intuitive.

[View Detailed Visual Specs](https://www.figma.com)

---

#### **External Web API Support**

Various APIs support remote paging, allowing seamless integration. Below are examples of Web APIs that work with remote paging:

| Web API      | Supports Separate Requests for Data and Total Records | Supports Combined Response | Documentation Links |
|--------------|-------------------------------------------------------|----------------------------|---------------------|
| Northwind    | Yes                                                   | Yes                        | [Northwind API Docs](https://github.com/IgniteUI/NorthwindAPI) |

---

#### **Testing and Validation**

To ensure correct implementation, both **end-to-end testing** and **manual scenarios** can be used. Here's a brief overview of the tests you should perform:
- Verify that remote paging works as expected with both separate and combined endpoints.
- Check that data updates correctly when page size or current page changes.

---

### Conclusion
Remote paging is an essential feature for efficiently managing large datasets within Grid and Tree Grid components. It offers significant performance improvements by reducing data loads and enabling developers to configure their grids with minimal effort.