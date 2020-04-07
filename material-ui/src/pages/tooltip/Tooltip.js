import React from "react"
import { Button, Tooltip, Select, MenuItem } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const TooltipComponent = () => {

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      // maxWidth: 220,
      width: 300,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  const renderTooltip01 = React.useMemo(() => {
    return (
      <HtmlTooltip title={(
        <>
          <img src="/img/01_promotions.png" alt="" />
        </>
      )}>
        <Button variant="contained">
          툴팁 테스트
        </Button>
      </HtmlTooltip>
    )
  }, [])

  const renderTooltip02 = React.useMemo(() => {
    return (
      <Select
        labelId="feedType"
        id="feedType"
        name="feedType"
        value={"FeedBanners"}
        onChange={null}
      >
        {FEED_TYPES.map((type, index) => {
          console.log(type)
          return (
            <MenuItem value={type.value}>
              {type.label}
            </MenuItem>
          )
        })}
      </Select>
    )
  }, [])

  const renderTooltip03 = React.useMemo(() => {
    return (
      <Select
        labelId="feedType"
        id="feedType"
        name="feedType"
        value={"FeedBanners"}
        onChange={null}
      >
        {FEED_TYPES.map((type, index) => {
          console.log(type)
          return (
            <MenuItem key={index} value={type.value}>

              <HtmlTooltip title={(
                <img src={`/img/${type.value}.png`} alt="" style={{ width: 300 }} />
              )}>
                <span>
                  {type.label}
                </span>
              </HtmlTooltip>
            </MenuItem>
          )
        })}
      </Select>
    )
  }, [])

  return (
    <div>
      <div>
        {renderTooltip01}
      </div>

      <br />
      <br />
      <br />

      <div>
        {renderTooltip02}
      </div>

      <br />
      <br />
      <br />

      <div>
        {renderTooltip03}
      </div>
    </div>
  )
}
export default TooltipComponent

const FEED_TYPE_PRODUCT_SELECTABLE = [
  { value: "Recommend", label: "개인화 추천" },
  { value: "RecommendPopular", label: "인기 추천" },
  { value: "Cart", label: "장바구니 상품 기반 추천" },
  { value: "Search", label: "직접 검색설정" },
]
const FEED_TYPE_COUPON_SELECTABLE = [{ value: "Coupon", label: "Coupon" }]
const FEED_TYPE_BANNER_SELECTABLE = [{ value: "Banner", label: "Banner" }]
const FEED_TYPE_PROMOTION_SELECTABLE = [
  { value: "Promotion", label: "Promotion" },
]
const FEED_TYPES = [
  {
    value: "FeedPromotions",
    label: "프로모션 - FeedPromotions",
    selectable: FEED_TYPE_PROMOTION_SELECTABLE,
    url: "01_promotions.png",
  },
  {
    value: "FeedBanners",
    label: "큰 배너 - FeedBanners",
    selectable: FEED_TYPE_BANNER_SELECTABLE,
  },
  {
    value: "FeedSmallBanners",
    label: "작은 배너 - FeedSmallBanners",
    selectable: FEED_TYPE_BANNER_SELECTABLE,
  },
  {
    value: "FeedGridProducts",
    label: "그리드형 상품 - FeedGridProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  {
    value: "FeedGridGroupProducts",
    label: "그리드 그룹형 상품 - FeedGridGroupProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  {
    value: "FeedCardProducts",
    label: "카드형 상품 - FeedCardProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  {
    value: "FeedListViewProducts",
    label: "리스트형 상품 - FeedListViewProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  // {
  //   value: "FeedListViewGroupProducts",
  //   label: "리스트 맵형 상품 - FeedListViewGroupProducts",
  //   selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  // },
  {
    value: "FeedListViewMapProducts",
    label: "리스트 맵형 상품 - FeedListViewMapProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  {
    value: "FeedSlideProducts",
    label: "슬라이드형 상품 - FeedSlideProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  {
    value: "FeedBigSlideProducts",
    label: "큰 슬라이드형 상품 - FeedBigSlideProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  // {
  //   value: "FeedMiddleSlideProducts",
  //   label: "중간 슬라이드형 상품 - FeedMiddleSlideProducts",
  //   selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  // },
  {
    value: "FeedSmallSlideProducts",
    label: "작은 슬라이드형 상품 - FeedSmallSlideProducts",
    selectable: FEED_TYPE_PRODUCT_SELECTABLE,
  },
  {
    value: "FeedCoupons",
    label: "쿠폰 - FeedCoupons",
    selectable: FEED_TYPE_COUPON_SELECTABLE,
  },
]