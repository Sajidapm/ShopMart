import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Search } from "lucide-react";
const SearchBar= () => {
  const [search, setSearch] = useState("");

  const products = useContext(ProductContext);
    const [showMenu, setShowMenu] = useState(false);
  

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex">
        
        
      <input
        type="text"
        placeholder="Search products..."
        value={search} onClick={() => setShowMenu(!showMenu)}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 h-10" relative
      />
        {showMenu &&
             <div  className="border border-gray-400">
             {filteredProducts.map((product) => (
             <div key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-12"
            />

            <h2>{product.title}</h2>
            </div>
          
             ))
            }
            </div>
            
        }
                <Search size={22} strokeWidth={2} className=" w-6  absolute top-2 h-10 border border-gray-600" />

</div>
  );
};

export default SearchBar;