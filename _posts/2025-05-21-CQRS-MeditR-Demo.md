---
layout: post
title: "Mastering CQRS with MediatR in .NET"
date: 2025-05-21 10:00:00 +0600
featured: true
---

# Mastering CQRS with MediatR in .NET

> “Separation of concerns isn’t just a principle — it’s a power tool.”

In this guide, you’ll see how to implement **CQRS** using **MediatR** to build clean, scalable architecture for modern .NET applications.

---

## Why CQRS?

CQRS (Command Query Responsibility Segregation) helps you:
- Split **read** and **write** logic
- Increase **scalability** and **maintainability**
- Enable **event sourcing** and **microservices**

---

## Project Structure

```
/Features
   /Products
     CreateProductCommand.cs
     CreateProductHandler.cs
     GetProductByIdQuery.cs
     GetProductByIdHandler.cs
```

---

## 1. Define the Command

```csharp
// CreateProductCommand.cs
public record CreateProductCommand(string Name, decimal Price) : IRequest<Guid>;
```

## 2. Handle the Command

```csharp
// CreateProductHandler.cs
public class CreateProductHandler : IRequestHandler<CreateProductCommand, Guid>
{
    private readonly IProductRepository _repo;

    public CreateProductHandler(IProductRepository repo)
    {
        _repo = repo;
    }

    public async Task<Guid> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
        var product = new Product { Name = request.Name, Price = request.Price };
        await _repo.AddAsync(product);
        return product.Id;
    }
}
```

---

## 3. Define the Query

```csharp
// GetProductByIdQuery.cs
public record GetProductByIdQuery(Guid Id) : IRequest<ProductDto>;
```

## 4. Handle the Query

```csharp
// GetProductByIdHandler.cs
public class GetProductByIdHandler : IRequestHandler<GetProductByIdQuery, ProductDto>
{
    private readonly IProductRepository _repo;

    public GetProductByIdHandler(IProductRepository repo)
    {
        _repo = repo;
    }

    public async Task<ProductDto> Handle(GetProductByIdQuery request, CancellationToken cancellationToken)
    {
        var product = await _repo.GetByIdAsync(request.Id);
        return new ProductDto(product.Id, product.Name, product.Price);
    }
}
```

---

## 5. Register MediatR in `Program.cs`

```csharp
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));
```

---

## 6. Trigger Commands/Queries in Controllers

```csharp
[HttpPost]
public async Task<IActionResult> Create([FromBody] CreateProductCommand cmd)
{
    var id = await _mediator.Send(cmd);
    return CreatedAtAction(nameof(Get), new { id }, id);
}
```

---

## Bonus Tip

Use **Pipeline Behaviors** in MediatR for cross-cutting concerns:
- Logging
- Validation (FluentValidation)
- Caching
- Retry logic

---

## Final Thoughts

**CQRS + MediatR** helps you write cleaner, decoupled, testable code. It scales well with complex domains and high-load systems.

**What's your favorite CQRS pattern tweak or MediatR trick?** Share below.

---

#dotnet #CSharp #CQRS #MediatR #CleanArchitecture #SoftwareEngineering #DevTips #AsyncProgramming
