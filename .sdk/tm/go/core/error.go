package core

type BonequestError struct {
	IsBonequestError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBonequestError(code string, msg string, ctx *Context) *BonequestError {
	return &BonequestError{
		IsBonequestError: true,
		Sdk:              "Bonequest",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BonequestError) Error() string {
	return e.Msg
}
