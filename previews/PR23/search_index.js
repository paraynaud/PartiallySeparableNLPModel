var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [PartiallySeparableNLPModels, Mod_ab_partitioned_data, Mod_common, Mod_partitionedNLPModel, Mod_PQN]","category":"page"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_grad_part_data!-Union{Tuple{Y}, Tuple{AbstractVector{Y}, PartitionedData, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_grad_part_data!","text":"evaluate_grad_part_data!(g::AbstractVector{Y}, part_data::PartitionedData, x::AbstractVector{Y}) where {Y <: Number}\nevaluate_grad_part_data!(part_data::PartitionedData)\n\nEvaluate the gradient at x in place. It computes and store the element gradients in part_data.pg and accumulate their contributions in g. When g and x are omitted, consider that part_data.g and part_data.x are g and x, respectively.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_grad_part_data-Union{Tuple{Y}, Tuple{PartitionedData, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_grad_part_data","text":"gradient = evaluate_grad_part_data(part_data::PartitionedData, x::AbstractVector{Y}) where {Y <: Number}\n\nReturn the gradient vector g at x. After the computation of the element gradients (stored in part_data.pg), g is built by accumulating their contributions.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_obj_part_data!-Tuple{PartitionedData}","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_obj_part_data!","text":"evaluate_obj_part_data!(part_data::PartitionedData)\n\nCompute the partially separable objective function, as a sum of element functions, at part_data.x. Its objective value is stored in part_data.fx .\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_obj_part_data-Union{Tuple{Y}, Tuple{PartitionedData, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_obj_part_data","text":"fx = evaluate_obj_part_data(part_data::PartitionedData, x::AbstractVector{Y}) where {Y <: Number}\n\nReturn the partially separable objective at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_y_part_data!-Union{Tuple{Y}, Tuple{PartitionedData, AbstractVector{Y}, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.evaluate_y_part_data!","text":"evaluate_y_part_data!(part_data::PartitionedData, x::AbstractVector{Y}, s::AbstractVector{Y}) where {Y <: Number}\nevaluate_y_part_data!(part_data::PartitionedData, s::AbstractVector{Y}) where {Y <: Number}\n\nCompute element gradients differences ∇̂fᵢ(x+s)-∇̂fᵢ(x) for each element function.  Store the results in part_data.py. When x is ommited, consider part_data.x as x and part_data.pg as the partitioned gradient at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.product_part_data_x!-Union{Tuple{Y}, Tuple{AbstractVector{Y}, PartitionedData, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.product_part_data_x!","text":"product_part_data_x!(res::AbstractVector{Y}, part_data::PartitionedData, v::AbstractVector{Y}) where {Y <: Number}\nproduct_part_data_x!(epv_res::PartitionedStructures.Elemental_pv{Y}, part_data::PartitionedData, epv::PartitionedStructures.Elemental_pv{Y}) where {Y <: Number}\nproduct_part_data_x!(epv_res::PartitionedStructures.Elemental_pv{Y}, pB::T, epv::PartitionedStructures.Elemental_pv{Y}) where {Y <: Number, T <: PartitionedStructures.Part_mat{Y}}\n\nStore the product between the partitioned matrix part_data.pB and the vector v in res. The computation of every element matrix-vector product require two partitioned vectors. The first partitioned vector epv is created from v and the results are stored in the second partitioned vector epv_res which builds the value store by g.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.product_part_data_x-Union{Tuple{Y}, Tuple{PartitionedData, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.product_part_data_x","text":"Bx = product_part_data_x(part_data::PartitionedData, v::AbstractVector{Y}) where {Y <: Number}\n\nReturn the product between the partitioned matrix part_data.pB and v.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_common.ElementFunction","page":"Reference","title":"PartiallySeparableNLPModels.Mod_common.ElementFunction","text":"ElementFunction\n\nA type that gathers the information indentifying an element function in a PartiallySeparableNLPModel, and its properties. ElementFunction has fields:\n\ni: the index of the element function;\nindex_element_tree: the index occupied in the element-function vector after the deletion of redundant element functions;\nvariable_indices: list of elemental variables of ElementFunction;\ntype: constant, linear, quadratic, cubic or general;\nconvexity_status: constant, linear, convex, concave or unknown.\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.Mod_common.compiled_grad_element_function-Tuple{T} where T","page":"Reference","title":"PartiallySeparableNLPModels.Mod_common.compiled_grad_element_function","text":"element_gradient_tape = compiled_grad_element_function(element_function::T; ni::Int = length(ExpressionTreeForge.get_elemental_variables(element_function)), type = Float64) where {T}\n\nReturn the elment_gradient_tape::GradientTape which speed up the gradient computation of element_function with ReverseDiff.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_common.distinct_element_expr_tree-Union{Tuple{T}, Tuple{Vector{T}, Vector{Vector{Int64}}}} where T","page":"Reference","title":"PartiallySeparableNLPModels.Mod_common.distinct_element_expr_tree","text":"(element_expr_trees, indices_element_tree) = distinct_element_expr_tree(vec_element_expr_tree::Vector{T}, vec_element_variables::Vector{Vector{Int}}; N::Int = length(vec_element_expr_tree)) where {T}\n\nIn practice, there may have several element functions having the same expression tree. distinct_element_expr_tree filters the vector vec_element_expr_tree to return element_expr_trees the distincts element functions. length(element_expr_trees) == M < N == length(vec_element_expr_tree). In addition it returns indices_element_tree, who records the index (1 <= i <= M) related ot the expression tree of each element function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_partitionedNLPModel.SupportedNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.Mod_partitionedNLPModel.SupportedNLPModel","text":"Accumulate the supported NLPModels. \n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.Mod_partitionedNLPModel.PartiallySeparableNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.Mod_partitionedNLPModel.PartiallySeparableNLPModel","text":"PartiallySeparableNLPModel{ T, S, G, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S}} <: AbstractPartiallySeparableNLPModel{T, S}\n\nA partitioned quasi-Newton NLPModel. A PartiallySeparableNLPModel has field:\n\nmeta: gather information about the PartiallySeparableNLPModel;\npart_data: allocate the partitioned structures required by a partitioned quasi-Newton trust-region method;\nnlp: the original NLPModel;\ncounters: count how many standards methods of NLPModels are called.\n\n\n\n\n\n","category":"type"},{"location":"reference/#NLPModels.grad!-Union{Tuple{P}, Tuple{S}, Tuple{T}, Tuple{P, AbstractVector{T}, AbstractVector{T}}} where {T, S, P<:PartiallySeparableNLPModels.Mod_partitionedNLPModel.AbstractPartiallySeparableNLPModel{T, S}}","page":"Reference","title":"NLPModels.grad!","text":"g = grad!(nlp, x, g)\n\nEvaluate ∇f(x), the gradient of the objective function at x in place.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.obj-Union{Tuple{P}, Tuple{S}, Tuple{T}, Tuple{P, AbstractVector{T}}} where {T, S, P<:PartiallySeparableNLPModels.Mod_partitionedNLPModel.AbstractPartiallySeparableNLPModel{T, S}}","page":"Reference","title":"NLPModels.obj","text":"f = obj(nlp, x)\n\nEvaluate f(x), the objective function of nlp at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_partitionedNLPModel.get_expr_tree-Union{Tuple{NLPModelsJuMP.MathOptNLPModel}, Tuple{T}} where T<:Number","page":"Reference","title":"PartiallySeparableNLPModels.Mod_partitionedNLPModel.get_expr_tree","text":"expr, n, x0 = get_expr_tree(adnlp::MathOptNLPModel; x0::Vector{T} = copy(adnlp.meta.x0), kwargs...) where {T <: Number}\nexpr, n, x0 = get_expr_tree(adnlp::ADNLPModel; x0::Vector{T} = copy(adnlp.meta.x0), kwargs...) where {T <: Number}\n\nReturn for a MathOptNLPModel or a ADNLPModel: the expression tree expr::Expr of the objective function, the size of the problem n and the initial point x0.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_partitionedNLPModel.hess_approx-Tuple{PartiallySeparableNLPModel}","page":"Reference","title":"PartiallySeparableNLPModels.Mod_partitionedNLPModel.hess_approx","text":"B = hess_approx(nlp::PartiallySeparableNLPModel)\n\nReturn the Hessian approximation of nlp.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_PQN.PartitionedDataTRPQN","page":"Reference","title":"PartiallySeparableNLPModels.Mod_PQN.PartitionedDataTRPQN","text":"PartitionedDataTRPQN{G, T <: Number, P <: Part_mat{T}} <: PartitionedData\n\nGather the structures required to run a partitioned quasi-Newton trust-region method. PartitionedDataTRPQN has fields:\n\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update peformed at each iterate.\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.Mod_PQN.build_PartitionedDataTRPQN-Union{Tuple{T}, Tuple{G}, Tuple{G, Int64}} where {G, T<:Number}","page":"Reference","title":"PartiallySeparableNLPModels.Mod_PQN.build_PartitionedDataTRPQN","text":"partitioneddata_tr_pqn = build_PartitionedDataTRPQN(expr_tree, n)\n\nReturn the structure required to run a partitioned quasi-Newton trust-region method.  It finds the partially-separable structure of an expression tree expr_tree representing f(x) = ∑fᵢ(xᵢ). Then it allocates the partitioned structures required. To define properly the sparse matrix of the partitioned matrix we need the size of the problem: n.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_PQN.update_PQN!-Union{Tuple{P}, Tuple{T}, Tuple{G}, Tuple{PartitionedDataTRPQN{G, T, P}, Vector{T}, Vector{T}}} where {G, T<:Number, P<:PartitionedStructures.M_part_mat.Part_mat{T}}","page":"Reference","title":"PartiallySeparableNLPModels.Mod_PQN.update_PQN!","text":"update_PQN!(pd_pqn::PartitionedDataTRPQN{G, T, P}, s::Vector{T})\nupdate_PQN!(pd_pqn::PartitionedDataTRPQN{G, T, P}, x::Vector{T}, s::Vector{T})\n\nPerform the partitioned quasi-Newton update given the current point x and the step s. When x is omitted, update_PQN! consider that pd_pqn has the current point in pdpqn.x. Moreover, it assumes that the partitioned gradient atxis already computed inpdpqn.pg`.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_PQN.update_PQN-Union{Tuple{P}, Tuple{T}, Tuple{G}, Tuple{PartitionedDataTRPQN{G, T, P}, Vector{T}, Vector{T}}} where {G, T<:Number, P<:PartitionedStructures.M_part_mat.Part_mat{T}}","page":"Reference","title":"PartiallySeparableNLPModels.Mod_PQN.update_PQN","text":"B = update_PQN(pd_pqn::PartitionedDataTRPQN{G, T, P}, x::Vector{T}, s::Vector{T};\n\nPerform the partitioned quasi-Newton update given the current point x and the step s.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Mod_ab_partitioned_data.update_nlp!-Union{Tuple{P}, Tuple{T}, Tuple{G}, Tuple{PartitionedDataTRPQN{G, T, P}, Vector{T}}} where {G, T<:Number, P<:PartitionedStructures.M_part_mat.Part_mat{T}}","page":"Reference","title":"PartiallySeparableNLPModels.Mod_ab_partitioned_data.update_nlp!","text":"update_nlp!(pd_pqn::PartitionedDataTRPQN{G, T, P}, s::Vector{T})\nupdate_nlp!(pd_pqn::PartitionedDataTRPQN{G, T, P}, x::Vector{T}, s::Vector{T})\n\nPerform the partitioned quasi-Newton update given the current point x and the step s. When x is omitted, update_PQN! consider that pd_pqn has the current point in pdpqn.x. Moreover, it assumes that the partitioned gradient atxis already computed inpdpqn.pg`.\n\n\n\n\n\n","category":"method"},{"location":"#PartiallySeparableNLPModels.jl","page":"Home","title":"PartiallySeparableNLPModels.jl","text":"","category":"section"},{"location":"#Philosophy","page":"Home","title":"Philosophy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The purpose of PartiallySeparableNLPModels.jl is to define automatically partially-separable NLPModels and facilitate the implementation of partitioned quasi-Newton methods.","category":"page"},{"location":"#Compatibility","page":"Home","title":"Compatibility","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Julia ≥ 1.6.","category":"page"},{"location":"#How-to-install","page":"Home","title":"How to install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/JuliaSmoothOptimizers/ExpressionTreeForge.jl, https://github.com/JuliaSmoothOptimizers/PartiallySeparableNLPModels.jl\npkg> test PartiallySeparableNLPModels","category":"page"},{"location":"#How-to-use","page":"Home","title":"How to use","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"See the tutorial.","category":"page"},{"location":"#Dependencies","page":"Home","title":"Dependencies","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The module uses ExpressionTreeForge.jl to detect the partially-separable structure and PartitionedStructures.jl to allocate partitioned quasi-Newton approximations.","category":"page"},{"location":"#Application","page":"Home","title":"Application","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PartiallySeparableSolvers.jl implements partitioned quasi-Newton trust-region methods from PartitionedDataTRPQN and the PartiallySeparableNLPModels.jl methods.","category":"page"},{"location":"tutorial/#PartiallySeparableNLPModels.jl-Tutorial","page":"Tutorial","title":"PartiallySeparableNLPModels.jl Tutorial","text":"","category":"section"},{"location":"tutorial/#An-NLPModel-exploiting-partial-separability","page":"Tutorial","title":"An NLPModel exploiting partial separability","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModels.jl defines a subtype of AbstractNLPModel to exploit automatically the partially-separable structure of fR^n to R","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":" f(x) = sum_i=1^N f_i (U_i x)   f_i  R^n_i to R  U_i in R^n_i times n n_i ll n","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"as the sum of element functions f_i.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModels.jl relies on ExpressionTreeForge.jl to detect the partially-separable structure and defines the suitable partitioned structures, required by the partitioned derivatives, using PartitionedStructures.jl.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"As a user, you need only define an NLPModel with an objective function implemented in pure Julia. For instance, one may use an ADNLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using PartiallySeparableNLPModels, ADNLPModels\n\nfunction example(x)\n  n = length(x)\n  n < 2 && @error(\"length of x must be >= 2\")\n  return sum((x[i] + x[i+1])^2 for i=1:n-1)\nend \nstart_example(n :: Int) = ones(n)\nexample_model(n :: Int) = ADNLPModel(example, start_example(n), name=\"Example \" * string(n) * \" variables\")\n\nn = 4 # size of the problem\nmodel = example_model(n)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and call PartiallySeparableNLPModel to define a partitioned NLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"pqn_adnlp = PartiallySeparableNLPModel(model)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Then, you can apply the usual methods obj and grad from NLPModels.jl:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using NLPModels\nx = ones(n)\nfx = NLPModels.obj(pqn_adnlp, x) # compute the obective function","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"gx = NLPModels.grad(pqn_adnlp, x) # compute the gradient","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"gx == NLPModels.grad(model, x)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"fx and gx compute and accumulate the element functions f_i and the element gradients nabla f_i, respectively. In addition, a PartiallySeparableNLPModel stores the value of each element gradient to perform partitioned quasi-Newton updates afterward (see below).","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The same procedure can be applied to MathOptNLPModels:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using JuMP, MathOptInterface, NLPModelsJuMP\n\nfunction jump_example(n::Int)\n  m = Model()\n  @variable(m, x[1:n])\n  @NLobjective(m, Min, sum((x[i] + x[i+1])^2 for i = 1:n-1))\n  evaluator = JuMP.NLPEvaluator(m)\n  MathOptInterface.initialize(evaluator, [:ExprGraph])\n  variables = JuMP.all_variables(m)\n  x0 = ones(n)\n  JuMP.set_start_value.(variables, x0)\n  nlp = MathOptNLPModel(m)\n  return nlp\nend\n\njumpnlp_example = jump_example(n)\npqn_jumpnlp = PartiallySeparableNLPModel(jumpnlp_example)\n\nfx = NLPModels.obj(pqn_jumpnlp, x) # compute the obective function\ngx = NLPModels.grad(pqn_jumpnlp, x) # compute the gradient","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"In the version v0.2.0, ManualNLPModels will be supported.","category":"page"},{"location":"tutorial/#A-partitioned-quasi-Newton-NLPModel","page":"Tutorial","title":"A partitioned quasi-Newton NLPModel","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"When defining a PartiallySeparableNLPModel, you allocate storage for partitioned quasi-Newton updates, which are implemented in PartitionedStructures.jl.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The Hessian approximation of each element function f_i (y) = (y_1 + y_2)^2 is initially set to an identity matrix.  The contribution of every element Hessian approximation is accumulated as","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"left \nbeginarrayccc\n  left ( beginarraycc\n    1  \n     1  \n  endarray right )   \n   0  \n    0 \nendarray\nright  \n+ \nleft \nbeginarrayccc\n  0   \n   left ( beginarraycc\n    1  \n     1  \n  endarray right )  \n    0 \nendarray\nright \n+ \nleft \nbeginarrayccc\n  0   \n   0  \n    left ( beginarraycc\n    1  \n     1  \n  endarray right )\nendarray\nright ","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The accumulated matrix can be visualized with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Matrix(hess_approx(pqn_jumpnlp))","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"You can specify the partitioned quasi-Newton update with the optional argument name:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModel(jumpnlp_example; name=:plse) # by default","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The possible variants are: :pbfgs, :psr1, :pse, :plbfgs, :plsr1 and :plse, see the PartitionedStructures.jl tutorial for more details.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Then, you can update the partitioned quasi-Newton approximation with the pair x,s:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"s = rand(n)\nupdate_nlp(pqn_adnlp, x, s)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and you can perform a partitioned-matrix-vector product with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"v = ones(n)\nBv = hprod(pqn_adnlp, x, v)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"An in-place variant helps define a LinearOperator (see LinearOperators) from a PartiallySeparableNLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"B = hess_op(pqn_adnlp, x)\nB*v","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"which can be paired with iterative solvers (see Krylov.jl).","category":"page"}]
}
