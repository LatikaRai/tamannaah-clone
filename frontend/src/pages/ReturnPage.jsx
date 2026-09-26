
const ReturnPage = () => {
  return (
    <div className="w-full font-['ArboriaBook'] text-[0.83rem] mt-[8vh] py-[6.3rem] flex items-center justify-center">
      <div className="w-[30%]">
        <div className="w-full text-justify flex flex-col pb-[0.9rem] gap-[0.9rem]">
          <h1 className="font-semibold pb-[0.4rem]">RETURN AND CANCELLATION POLICY</h1>
          <p className="text-gray-600">At Tamannaah Fine Jewellery, your satisfaction is our top priority. If you are not fully satisfied with your purchase, you may return the item.</p>
        </div>
        <div className="w-full text-justify flex flex-col pb-[0.9rem] gap-[0.9rem]">
          <h1 className="font-semibold pb-[0.4rem]">RETURN PROCESS</h1>
          <p className="text-gray-600">Returns are accepted only for defective products and must be initiated within 7 days of purchase. The product must be unused, in its original packaging, with the tag intact and include the invoice. To start the return process for defective products, please contact us at info@tamannaah.com.</p>
          <p className="text-gray-600">Our courier partner will handle the collection of the returned items from your specified address at no extra cost.</p>
        </div>
        <div className="w-full text-justify flex flex-col pb-[0.9rem] gap-[0.9rem]">
          <h1 className="font-semibold pb-[0.4rem]">RETURN CHARGES</h1>
          <p className="text-gray-600">Returns are free of charge, and our courier partner will handle the collection from within India.</p>
          <p className="text-gray-600">How to Initiate the Refund Process</p>
          <ul className="list-disc text-gray-600">
            <li>Contact us within the specified period for your product type.</li>
            <li>Await confirmation before returning the product.</li>
            <li>Ensure all returns are in their original condition with the invoice or guarantee card included.</li>
          </ul>
        </div>
        <div className="w-full text-justify flex flex-col pb-[0.9rem] gap-[0.9rem]">
          <h1 className="font-semibold pb-[0.4rem]">CANCELLATION POLICY</h1>
          <p className="text-gray-600">Orders can only be canceled within 2 hours of being placed. To cancel an order, please contact us at <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@tamannaah.com" className="underline hover:underline-offset-1">info@tamannaah.com</a>.</p>
        </div>
        <div className="w-full text-justify flex flex-col pb-[0.9rem] gap-[0.9rem]">
          <h1 className="font-semibold pb-[0.4rem]">REFUNDS</h1>
          <p className="text-gray-600">Refunds are processed after receiving the product in its original, unused condition with packaging and tags intact. Refunds will be issued within 7-15 working days via the original payment method or cheque. </p>
        </div>
      </div>
    </div>
  )
}

export default ReturnPage
