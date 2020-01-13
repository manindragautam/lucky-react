class Frontend::Index < BrowserAction
  include Auth::AllowGuests
  fallback do
    if html?
      html Home::IndexPage
    else
      raise Lucky::RouteNotFoundError.new(context)
    end
  end
end
