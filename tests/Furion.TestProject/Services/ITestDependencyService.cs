﻿
using Furion.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Furion.TestProject.Services;

public interface ITestDependencyService
{
}

public interface ITest2DependencyService
{
}


public class TestDependencyService : ITestDependencyService, ITest2DependencyService, ITransientService
{
}
public interface ITestGenericDependencyService<T>
{
}

public class TestGenericDependencyService<T> : ITestGenericDependencyService<T>, ITransientService
{
}


public interface ITest3DependencyService
{
    bool NoNull();
}

public class Test3DependencyService : ITest3DependencyService, IFactoryService<ITest3DependencyService, ITransientService>
{
    public Test3DependencyService()
    {
    }

    [AutowiredServices]
    IApp? App { get; }

    public bool NoNull()
    {
        return App != null;
    }

    public object ImplementationFactory(IServiceProvider serviceProvider)
    {
        return new Test3DependencyService();
    }
}

public interface ITest4NamedService
{

}

public class Test4NamedService : ITest4NamedService, INamedService, ITransientService
{
    public string ServiceName()
    {
        return "test_four";
    }
}