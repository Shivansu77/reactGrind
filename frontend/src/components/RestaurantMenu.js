import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL, PLACEHOLDER_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import '../index.css';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const menuCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c?.card?.card?.itemCards
    ) || [];

  if (!resInfo) return <Shimmer />;

  return (
    <div className="min-h-screen bg-black px-5 py-10">
      <div className="mx-auto max-w-[900px]">
        
        {/* Restaurant Info */}
        <div className="mb-8 rounded-2xl bg-[#111] px-8 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          <h2 className="mb-2 text-[32px] font-[730] text-[#e6e6e6]">
            {name}
          </h2>
          <p className="text-[16px] text-[#cfcfcf]">
            {cuisines?.join(", ")} - {costForTwoMessage}
          </p>
        </div>

        <h3 className="mb-6 text-center text-[28px] font-bold text-[#e6e6e6]">
          Menu
        </h3>

        {/* Menu Categories */}
        {menuCards.map((category, idx) => {
          const cat = category?.card?.card || {};
          const title = cat?.title;
          const image = cat?.image;

          return (
            <div
              key={idx}
              className="mb-6 rounded-2xl bg-[#111] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {/* Category Header */}
              {title && (
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-[72px] w-[72px] overflow-hidden rounded-xl bg-black">
                    <img
                      src={image ? `${CDN_URL}${image}` : PLACEHOLDER_IMG}
                      alt={title}
                      onError={(e) =>
                        (e.currentTarget.src = PLACEHOLDER_IMG)
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[20px] font-bold text-[#e6e6e6]">
                      {title}
                    </h4>
                    {cat?.subtitle && (
                      <p className="mt-1 text-[13px] text-[#cfcfcf]">
                        {cat.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Items */}
              {category?.card?.card?.itemCards?.map((item) => (
                <div
                  key={item?.card?.info?.id}
                  className="my-4 flex cursor-pointer items-center justify-between rounded-xl bg-[#111] p-5 transition-colors duration-200 hover:bg-white/5"
                >
                  <div className="flex-1">
                    <h5 className="mb-2 text-[18px] font-semibold text-[#e6e6e6]">
                      {item?.card?.info?.name}
                    </h5>

                    <p className="mb-2 text-[18px] font-bold text-[#ff6b6b]">
                      ₹
                      {(item?.card?.info?.price ??
                        item?.card?.info?.defaultPrice) / 100}
                    </p>

                    {item?.card?.info?.description && (
                      <p className="text-[14px] leading-relaxed text-[#cfcfcf]">
                        {item?.card?.info?.description}
                      </p>
                    )}
                  </div>

                  {item?.card?.info?.imageId && (
                    <img
                      src={`${CDN_URL}w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                      alt={item?.card?.info?.name}
                      onError={(e) =>
                        (e.currentTarget.src = PLACEHOLDER_IMG)
                      }
                      className="ml-5 h-[120px] w-[130px] rounded-xl object-cover shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                    />
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
